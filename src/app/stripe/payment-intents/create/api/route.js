import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  const { amount, currency, automatic_payment_methods } = data
  // console.log(data)

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: automatic_payment_methods.enabled,
    },
  })
  console.log("paymentIntent", paymentIntent)

  return NextResponse.json("")
}
