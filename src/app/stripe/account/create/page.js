"use client"
import ZustandLoader from "@/app/CustomLoader"
import utilityStore from "@/config/store"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const CreateAccount = () => {
  const { isLoaded, setLoaded } = useStore(utilityStore)
  const handleButtonClick = async () => {
    setLoaded(true)
    console.log("create Account started")
    const data = {
      country: "US",
      email: "carlostubigon@example.com",
      business_type: "individual",
      individual: {
        first_name: "Carlos",
        last_name: "Tubigon",
      },
      tos_shown_and_accepted: true,
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/stripe/account/create/api",
        {
          data,
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
        colorScheme={"blue"}
        px={4}
        onClick={handleButtonClick}
      >
        CreateAccount
      </Button>
      {isLoaded && <ZustandLoader />}
    </div>
  )
}

export default CreateAccount
