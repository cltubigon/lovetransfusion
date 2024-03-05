"use client"
import utilityStorePersist from "@/config/storePersist"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const RetrieveAccount = () => {
  const { isLoaded, setLoaded } = useStore(utilityStorePersist)
  const handleButtonClick = async () => {
    setLoaded(true)
    console.log("create Account started")
    try {
      const response = await axios.get(
        "http://localhost:3000/stripe/account/list-all/api"
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
    </div>
  )
}

export default RetrieveAccount
