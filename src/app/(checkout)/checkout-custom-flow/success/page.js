"use client"
import React, { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import axios from "axios"
import { Flex, Text } from "@chakra-ui/react"

const SuccessPageOfCustomFlow = () => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState("")

  console.log({ status, customerEmail })
  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const intentId = urlParams.get("payment_intent")
    console.log({ queryString, urlParams, intentId })

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

  if (status === "succeeded") {
    return (
      <Flex justifyContent={"center"}>
        <Flex maxW={"920px"} textAlign={"center"}>
          <Text>
            We appreciate your business! A receipt email will be sent to{" "}
            {customerEmail}. If you have any questions, please email{" "}
            <a href="mailto:orders@example.com">orders@example.com</a>.
          </Text>
        </Flex>
      </Flex>
    )
  }

  return null
}

export default SuccessPageOfCustomFlow
