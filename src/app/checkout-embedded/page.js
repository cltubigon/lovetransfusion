"use client"
import utilityStore from "@/config/store"
import { Box } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useStore } from "zustand"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CheckoutWithStripeSessions2 = () => {
  const { isLoaded, setLoaded, selectedProducts } = useStore(utilityStore)
  const [clientSecret, setclientSecret] = useState("")
  console.log({ selectedProducts })

  useEffect(() => {
    if (selectedProducts?.length > 0) {
      const initiateCheckout = async () => {
        console.log('selectedProducts triggered')
        // setLoaded(true)
        try {
          const response = await axios.post(
            "http://localhost:3000/checkout-embedded/api",
            {
              products: selectedProducts,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )

          if (response) {
            console.log({ response })
            const { data } = response
            setclientSecret(data.data)
          }
        } catch (error) {
          console.error("Error during checkout:", error)
        }
      }
      initiateCheckout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts])

  return (
    <Box bgColor={"blue.300"}>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </Box>
  )
}

export default CheckoutWithStripeSessions2
