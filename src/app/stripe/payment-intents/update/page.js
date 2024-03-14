"use client"
import utilityStorePersist from "@/config/storePersist"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const UpdatePaymentIntent = () => {
  const { isLoaded, setLoaded } = useStore(utilityStorePersist)
  const handleButtonClick = async () => {
    setLoaded(true)

    const data = {
      id: "pi_3Ol3X3E714z6NjCo1YsURAjk",
      metadata: {
        order_id: "6732",
      },
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/update/api`,
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
        setLoaded(false)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }
  return (
    <div>
      <Button
        w={"100%"}
        colorScheme={"green"}
        px={4}
        onClick={handleButtonClick}
      >
        UpdatePaymentIntent
      </Button>
    </div>
  )
}

export default UpdatePaymentIntent
