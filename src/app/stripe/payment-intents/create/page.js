"use client"
import utilityStorePersist from "@/utilities/store/storePersist"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const CreatePaymentIntent = () => {
  const { isLoaded, setLoaded, selectedProducts } = useStore(utilityStorePersist)
  const handleButtonClick = async () => {
    setLoaded(true)
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/create/api`,
        {
          data: selectedProducts,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      console.log({ response })
      console.log(response.data) // Log the response data

      if (response) {
        // console.log({ response })
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
        colorScheme={"purple"}
        px={4}
        onClick={handleButtonClick}
      >
        CreatePaymentIntent
      </Button>
    </div>
  )
}

export default CreatePaymentIntent
