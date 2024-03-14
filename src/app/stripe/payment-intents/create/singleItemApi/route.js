import { NextResponse } from "next/server"
import { v4 } from "uuid"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// export const POST = async (request) => {
//   const paymentIntent = await stripe.paymentIntents.retrieve('pi_3Ou8K3E714z6NjCo0mN8WgwB')
//   console.log('paymentIntent', paymentIntent)
//   return NextResponse.json('')
// }
export const POST = async (request) => {
  // // const { data } = await request.json()

  const total = 10 * 100

  const empotencyKey = v4()
  console.log({ empotencyKey })

  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: total,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      description: "This is the description23",
      receipt_email: "cltubigon23@gmail.com",
      metadata: {
        owner_name: "Carlo Tubigon",
        owner_email: "cltubigon23@gmail.com",
      },
      // customer: await createCustomerID(),
    },
    {
      idempotencyKey: empotencyKey,
    }
  )
  console.log("paymentIntent", paymentIntent)

  return NextResponse.json(paymentIntent.client_secret)
}
