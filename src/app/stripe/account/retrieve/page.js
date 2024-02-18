"use client"
import ZustandLoader from "@/app/CustomLoader"
import utilityStore from "@/config/store"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const RetrieveAccount = () => {
  const { isLoaded, setLoaded } = useStore(utilityStore)
  const handleButtonClick = async () => {
    setLoaded(true)
    console.log("create Account started")
    try {
      const response = await axios.get(
        "http://localhost:3000/stripe/account/retrieve/api"
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
        colorScheme={"yellow"}
        px={4}
        onClick={handleButtonClick}
      >
        Retrieve Account
      </Button>
      {isLoaded && <ZustandLoader />}
    </div>
  )
}

export default RetrieveAccount
