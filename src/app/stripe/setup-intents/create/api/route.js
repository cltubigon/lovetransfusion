import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  const { type } = data
  console.log({ data })

  const setupIntent = await stripe.setupIntents.create({
    payment_method_types: [type],
  });
  console.log({ setupIntent })

  return NextResponse.json(setupIntent)
}
