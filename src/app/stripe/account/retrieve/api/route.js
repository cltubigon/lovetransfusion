import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const GET = async () => {
  //   const { data } = await request.json()
  //   console.log(data)

  const accounts = await stripe.accounts.list()
  console.log({ accounts })
  const { data } = accounts

  return NextResponse.json(data)
}
