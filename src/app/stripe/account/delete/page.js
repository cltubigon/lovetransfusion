"use client"
import utilityStore from "@/config/store"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const DeleteAccount = () => {
  const { isLoaded, setLoaded } = useStore(utilityStore)
  const handleButtonClick = async () => {
    setLoaded(true)
    console.log("create Account started")
    const data = {
      id: "acct_1Ol2TgE9pmVn6hyW",
    }
    try {
      const response = await axios.delete(
        "http://localhost:3000/stripe/account/delete/api",
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
        // Redirect to the provided URL
        // router.push(response.data.url)
        // console.log("response.url", response.data)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }
  return (
    <div>
      <Button w={"100%"} colorScheme={"red"} px={4} onClick={handleButtonClick}>
        Delete Account
      </Button>
    </div>
  )
}

export default DeleteAccount
