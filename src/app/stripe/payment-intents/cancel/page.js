"use client"
import utilityStorePersist from "@/config/storePersist"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const CancelPaymentIntent = ({ id: data }) => {
  const { isLoaded, setLoaded } = useStore(utilityStorePersist)
  const handleButtonClick = async () => {
    // setLoaded(true)
    try {
      const response = await axios.post(
        "http://localhost:3000/stripe/payment-intents/cancel/api",
        {
          data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response) {
        console.log({ response })
        // setLoaded(false)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }
  return (
    <div>
      <Button
        w={"100%"}
        colorScheme={"red"}
        px={4}
        onClick={handleButtonClick}
      >
        Cancel
      </Button>
    </div>
  )
}

export default CancelPaymentIntent
