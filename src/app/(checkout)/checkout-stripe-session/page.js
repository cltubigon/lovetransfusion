"use client"
import utilityStorePersist from "@/utilities/store/storePersist"
import { Button, Flex } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import React from "react"
import { useStore } from "zustand"

const CheckoutWithStripeSessions = () => {
  const { isLoaded, setLoaded, selectedProducts } = useStore(utilityStorePersist)
  const router = useRouter()

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/checkout-stripe-session/api/post`,
        {
          products: selectedProducts,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      console.log({ response })
      console.log(response.data) // Log the response data

      if (response.data.url) {
        // Redirect to the provided URL
        router.push(response.data.url)
        console.log("response.url", response.data.url)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }

  return (
    <Flex flexBasis={"100%"}>
      <Button onClick={handleCheckout} w={"100%"} colorScheme={"orange"}>
        Checkout with Stripe Sessions
      </Button>
    </Flex>
  )
}

export default CheckoutWithStripeSessions