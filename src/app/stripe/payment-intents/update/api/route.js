import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  const { id: pIntentId, metadata } = data
  console.log({ pIntentId })

  const paymentIntent = await stripe.paymentIntents.update(pIntentId, {
    metadata: {
      order_id: metadata.order_id,
    },
  })
  console.log("paymentIntent", paymentIntent)

  return NextResponse.json("")
}
