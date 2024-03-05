"use client"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useStore } from "zustand"
import CheckoutForm from "./CheckoutForm"
import utilityStorePersist from "@/config/storePersist"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CheckoutPage = () => {
  const { selectedProducts } = useStore(utilityStorePersist)
  const [clientSecret, setclientSecret] = useState(null)

  useEffect(() => {
    if (selectedProducts.length > 0) {
      const createIntent = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/stripe/payment-intents/create/api",
            {
              data: selectedProducts,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )

          if (response) {
            console.log({ response })
            setclientSecret(response.data)
          }
        } catch (error) {
          console.error("Error during checkout:", error)
        }
      }
      createIntent()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts])

  const appearance = {
    theme: "stripe",
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <Box alignItems={"center"} flexDir={"column"} gap={2} px={10}>
      <Heading>Checkout Pages</Heading>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  )
}

export default CheckoutPage
