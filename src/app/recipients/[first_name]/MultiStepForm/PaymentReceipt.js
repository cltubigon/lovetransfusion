"use client"
import React, { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import axios from "axios"
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"
import { lightBlue } from "@/app/globalStyle"

const PaymentReceipt = () => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState("")
  const [isLoading, setisLoading] = useState(true)
  const {
    popup: {
      data: { payment_intent },
    },
  } = useStore(utilityStore)

  console.log({ payment_intent })

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const intentId = urlParams.get("payment_intent")

    const initiateGet = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/checkout-custom-flow/api`,
          {
            intentId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (response) {
          console.log({ response })
          setStatus(response.data.status)
          setCustomerEmail(response.data.customer_email)
          if (response.data.status === "succeeded") setisLoading(false)
        }
      } catch (error) {
        console.error("Error during checkout:", error.message)
      }
    }
    initiateGet()
  }, [])

  if (status === "open") {
    return redirect("/")
  }
  console.log("isLoading", isLoading)

  return (
    <Flex justifyContent={"center"}>
      {!isLoading && (
        <Flex maxW={"920px"} textAlign={"center"}>
          <Text>
            We appreciate your business! A receipt email will be sent to{" "}
            {customerEmail}. If you have any questions, please email{" "}
            <a href="mailto:orders@example.com">kevin@lovetransfusion.com</a>.
          </Text>
        </Flex>
      )}
      {isLoading && (
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
          py={10}
        >
          <Spinner color={lightBlue} size={"xl"} />
          <Heading color={lightBlue}>Loading...</Heading>
        </Flex>
      )}
    </Flex>
  )
}

export default PaymentReceipt
