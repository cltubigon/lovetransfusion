"use client"
import utilityStore from "@/config/store"
import { Button, Flex } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import React from "react"
import { useStore } from "zustand"
import ZustandLoader from "../CustomLoader"

const CheckoutWithStripeSessions = () => {
  const { isLoaded, setLoaded, selectedProducts } = useStore(utilityStore)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoaded(true)
    try {
      const response = await axios.post(
        "http://localhost:3000/checkout-stripe-session/api",
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
        setLoaded(false)
        console.log("response.url", response.data.url)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }

  return (
    <Flex flexBasis={"100%"}>
      <Button onClick={handleCheckout} w={"100%"} colorScheme={"green"}>
        Checkout with Stripe Sessions
      </Button>
      {isLoaded && <ZustandLoader />}
    </Flex>
  )
}

export default CheckoutWithStripeSessions
