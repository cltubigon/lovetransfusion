import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (req) => {
  const { intentId } = await req.json()
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(intentId)
    console.log({ paymentIntent })
    return NextResponse.json({
        status: paymentIntent.status,
        customer_email: paymentIntent.receipt_email
      })
      return NextResponse.json('')
  } catch (err) {
    return NextResponse.json({err})
  }
}