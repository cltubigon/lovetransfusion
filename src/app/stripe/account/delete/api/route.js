import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const DELETE = async (request) => {
  console.log({ request })
  const { id } = await request.json()
  console.log('the id', id)

  const deleted = await stripe.accounts.del(id)
  // console.log({ accounts })

  return NextResponse.json(deleted)
}
