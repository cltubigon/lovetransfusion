import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  console.log({ data })
  const { id } = data

  const paymentIntent = await stripe.paymentIntents.retrieve(id)
  console.log({ paymentIntent })

  return NextResponse.json(paymentIntent)
}
