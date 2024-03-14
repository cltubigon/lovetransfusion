"use client"
import { Box } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useStore } from "zustand"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import utilityStorePersist from "@/config/storePersist"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CheckoutEmbedded = () => {
  const { selectedProducts } = useStore(utilityStorePersist)
  const [clientSecret, setclientSecret] = useState("")
  console.log({ selectedProducts })

  useEffect(() => {
    if (selectedProducts?.length > 0) {
      const initiateCheckout = async () => {
        console.log('selectedProducts triggered')
        // setLoaded(true)
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/checkout-embedded/api/post`,
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
    <Box>
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

export default CheckoutEmbedded
