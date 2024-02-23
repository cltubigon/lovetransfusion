"use client"
import ZustandLoader from "@/app/CustomLoader"
import utilityStore from "@/config/store"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const CreatePaymentIntent = () => {
  const { isLoaded, setLoaded, selectedProducts } = useStore(utilityStore)
  const handleButtonClick = async () => {
    setLoaded(true)
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
      {isLoaded && <ZustandLoader />}
    </div>
  )
}

export default CreatePaymentIntent
