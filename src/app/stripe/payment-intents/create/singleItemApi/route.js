import { NextResponse } from "next/server"
import { v4 } from "uuid"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// export const POST = async (request) => {
//   const paymentIntent = await stripe.paymentIntents.retrieve('pi_3Ou8K3E714z6NjCo0mN8WgwB')
//   console.log('paymentIntent', paymentIntent)
//   return NextResponse.json('')
// }
export const POST = async (request) => {
  const { data } = await request.json()
  const {
    donee,
    donationAmount,
    donorFirstName,
    donorLastName,
    donorEmailAddress,
  } = data

  const empotencyKey = v4()
  console.log({ empotencyKey })

  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: donationAmount * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      description: `A $${parseFloat(donationAmount)} donation for ${donee}`,
      receipt_email: donorEmailAddress,
      metadata: {
        owner_firstName: donorFirstName,
        owner_lastName: donorLastName,
        owner_email: donorEmailAddress,
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
