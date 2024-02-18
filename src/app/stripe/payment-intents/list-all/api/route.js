import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const GET = async () => {
  const paymentIntents = await stripe.paymentIntents.list({
    limit: 100,
  })
  console.log({ paymentIntents })
  const { data } = paymentIntents
  return NextResponse.json(data)
}
