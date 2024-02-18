import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  console.log(data)

  const paymentIntent = await stripe.paymentIntents.cancel(data)
  console.log({ paymentIntent })

  return NextResponse.json("")
}
