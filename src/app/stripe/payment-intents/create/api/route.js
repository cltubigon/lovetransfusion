import { products } from "@/app/products"
import { NextResponse } from "next/server"
import { v4 } from "uuid"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const total = items?.reduce((acc, item) => {
    const innerTotal = parseFloat(item.price * item.quantity) + acc
    return innerTotal
  }, 0)
  return total * 100
}

export const POST = async (request) => {
  const { data } = await request.json()

  let serverProducts = []

  for (const item of data) {
    const thisItem = products?.filter((data) => data.id === item.id)
    const newItem = { ...thisItem[0], quantity: item.quantity }
    serverProducts.push(newItem)
  }

  const empotencyKey = v4()
  console.log({ empotencyKey })

  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: calculateOrderAmount(serverProducts),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    },
    {
      idempotencyKey: empotencyKey,
    }
  )
  console.log("paymentIntent", paymentIntent)

  return NextResponse.json(paymentIntent.client_secret)
}
