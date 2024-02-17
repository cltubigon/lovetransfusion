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

      if (stripeProduct == undefined) {
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

  console.log({ stripeItems })

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    billing_address_collection: "required",
    allow_promotion_codes: true,
    payment_intent_data: {
      capture_method: 'automatic_async'
    }
  })
  console.log({ session })
  const currentSession = await stripe.checkout.sessions.retrieve(session.id)
  console.log('currentSession', currentSession)

  return NextResponse.json({ url: session.url })
  // return NextResponse.json('')

}