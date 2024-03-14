"use client"
import utilityStorePersist from "@/config/storePersist"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useStore } from "zustand"
import { FiArrowRight } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import { buttonColor, buttonColorHover, openSans } from "@/app/globalStyle"
import {
  Elements,
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "@/app/(checkout)/checkout-custom-flow/CheckoutForm"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const PaymentForm = () => {
  const [clientSecret, setclientSecret] = useState(null)

  useEffect(() => {
    const createIntent = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/create/singleItemApi`,
          {
            data: "",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (response) {
          setclientSecret(response.data)
        }
      } catch (error) {
        console.error("Error during checkout:", error)
      }
    }
    createIntent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const appearance = {
    theme: "stripe",
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div>
      <Box alignItems={"center"} flexDir={"column"} gap={2}>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </Box>
      <Flex
        color="#00d084"
        alignItems={"center"}
        gap={2}
        justifyContent={"center"}
      >
        <FaLock fontSize={"12px"} />
        <Text fontSize={"12px"}>Secure donation</Text>
      </Flex>
    </div>
  )
}

export default PaymentForm
