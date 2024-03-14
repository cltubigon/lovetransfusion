"use client"
import React, { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import axios from "axios"
import { Flex, Heading, Text } from "@chakra-ui/react"

export default function Return() {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState("")
  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const sessionId = urlParams.get("session_id")
    console.log({ queryString, urlParams, sessionId })
    
    const initiateGet = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/checkout-embedded/api/get`,
          {
            sessionId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (response) {
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

  if (status === "complete") {
    return (
      <Flex justifyContent={"center"} >
        <Flex maxW={"920px"} textAlign={'center'} >
          <Text>
            We appreciate your business! A confirmation email will be sent to{" "} {customerEmail}. If you have any questions, please email{" "} <a href="mailto:orders@example.com">orders@example.com</a>.
          </Text>
        </Flex>
      </Flex>
    )
  }

  return null
}