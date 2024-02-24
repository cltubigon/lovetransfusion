"use client"
import React, { useEffect, useState } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Box, Button } from "@chakra-ui/react"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  console.log({ isLoading, stripe, elements })

  useEffect(() => {
    console.log({ message })
  }, [message])

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )

    if (!clientSecret) {
      return
    }
    console.log({ clientSecret })

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    console.log("handleSubmit triggered")
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    // setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/checkout-custom-flow/success",
      },
    })

    // setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: {
      type: "tabs", // accordion
      defaultCollapsed: false,
      //   radios: false,                 // Only in "accordion"
      //   spaceAccordionItems: true      // Optional in "accordion"
    },
  }
console.log({ message })
  return (
    <Box>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Box>
  )
}
