import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list()
  const availableProducts = checkProducts.data.filter(
    (product) => product.active === true
  )
  return availableProducts
}


export const POST = async (request) => {
  const { products } = await request.json()
  const data = products

  let activeProducts = await getActiveProducts()

  // Creating Products in Stripe - Auto skip if exists
  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct) =>
          stripeProduct?.name?.toLowerCase() ===
          product?.productName?.toLowerCase()
      )

      if (stripeProduct === undefined) {
        const prod = await stripe.products.create({
          name: product.productName,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
          },
        })
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error)
    throw error
  }

  activeProducts = await getActiveProducts()
  let stripeItems = []

  console.log({ data, products })
  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod) =>
        prod?.name?.toLowerCase() === product?.productName?.toLowerCase()
    )

    if (stripeProduct) {
      console.log({ stripeProduct })
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      })
    }
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: stripeItems,
    mode: "payment",
    return_url: `${request.headers.get('origin')}/checkout-embedded/return?session_id={CHECKOUT_SESSION_ID}`,
    billing_address_collection: "required",
    allow_promotion_codes: true,
  })
  console.log({ session })
  return NextResponse.json({ data: session.client_secret })
}
