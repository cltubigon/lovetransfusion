import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (req) => {
  const { sessionId } = await req.json()
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details.email,
    })
  } catch (err) {
    return NextResponse.json({ err })
  }
}
