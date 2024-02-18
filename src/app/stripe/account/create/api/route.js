import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  console.log(data)
  
  const account = await stripe.accounts.create({
    type: "express",
    country: data.country,
    email: data.email,
    business_type: data.business_type,
    individual: {
      first_name: data.individual.first_name,
      last_name: data.individual.last_name,
    },
  })
  console.log("account", account)

  return NextResponse.json("")
}
