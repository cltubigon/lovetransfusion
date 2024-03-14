"use client"
import utilityStorePersist from "@/config/storePersist"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { useStore } from "zustand"

const CreateSetupIntents = () => {
  const { isLoaded, setLoaded } = useStore(utilityStorePersist)
  const handleButtonClick = async () => {
    // setLoaded(true)
    const data = {
      type: 'card'
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/setup-intents/create/api`,
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
        colorScheme={"blue"}
        px={4}
        onClick={handleButtonClick}
      >
        CreateSetupIntents
      </Button>
    </div>
  )
}

export default CreateSetupIntents