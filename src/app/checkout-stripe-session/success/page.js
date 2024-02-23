import { Box, Text } from "@chakra-ui/react"
import React from "react"
// import SuccessClient from "./components/page"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const SuccessPage = async () => {
  const session = await stripe.checkout.sessions.retrieve(
    "cs_test_b1S53QcktsUuLjhEUpflsfB03n6D6r9K7rApHzXCXecHqTrhfd5LzMfnUN"
  )
  
const paymentIntent = await stripe.paymentIntents.retrieve(
  'pi_3Ok2bkE714z6NjCo0MLXrnu8'
);
const charge = await stripe.charges.retrieve('ch_3Ok2bkE714z6NjCo00lJ3mwm');

const balanceTransaction = await stripe.balanceTransactions.retrieve(
  'txn_3Ok2bkE714z6NjCo0ljIOCmk'
);

  console.log('session', session.payment_intent)
  console.log('paymentIntent', paymentIntent.latest_charge)
  console.log('charge', charge.balance_transaction)
  console.log('balanceTransaction', (balanceTransaction.fee ))
  return (
    <Box>
      <Text>Success Page</Text>
      
    </Box>
  )
}

export default SuccessPage
