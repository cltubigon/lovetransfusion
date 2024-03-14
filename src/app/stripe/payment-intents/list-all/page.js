"use client"
import { Button, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useStore } from "zustand"
import CancelPaymentIntent from "../cancel/page"
import utilityStorePersist from "@/config/storePersist"

const ListAllPaymentIntents = () => {
  const { isLoaded, setLoaded } = useStore(utilityStorePersist)
  const [intents, setIntents] = useState(null)
  const listAllPaymentIntents = async () => {
    setLoaded(true)
    console.log("create Account started")
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/list-all/api`
      )

      if (response) {
        setLoaded(false)
        console.log({ response })
        setIntents(response.data)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }
  useEffect(() => {
    listAllPaymentIntents()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      {intents?.map((intent, index) => {
        const { id, amount, status } = intent
        return (
          <Flex key={index} gap={4}>
            <Text>id: {id}</Text>
            <Text>amount: {amount}</Text>
            <Text>status: {status}</Text>
            <CancelPaymentIntent id={id} />
          </Flex>
        )
      })}
      <Button
        w={"100%"}
        colorScheme={"gray"}
        px={4}
      >
        List all payment intents
      </Button>
    </div>
  )
}

export default ListAllPaymentIntents
