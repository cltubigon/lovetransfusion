import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  console.log(data)
  
  const account = await stripe.accounts.update(
    'acct_1Nv0FGQ9RKHgCVdK',
    {
      metadata: {
        order_id: '6735',
      },
    }
  );

  console.log("await account", await account)

  return NextResponse.json("")
}

