"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "@/app/(checkout)/checkout-custom-flow/CheckoutForm"
import utilityStore from "@/utilities/store/store"
import { useStore } from "zustand"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const PaymentForm = () => {
  const [clientSecret, setclientSecret] = useState(null)
  const {
    carePackage: {
      donationAmount,
      donorFirstName,
      donorLastName,
      donorEmailAddress,
      donee,
    },
  } = useStore(utilityStore)

  useEffect(() => {
    const createIntent = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/create/singleItemApi`,
          {
            data: {
              donationAmount,
              donorFirstName,
              donorLastName,
              donorEmailAddress,
              donee,
            },
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
      <Box alignItems={"center"} flexDir={"column"} gap={2} mb={3} >
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
