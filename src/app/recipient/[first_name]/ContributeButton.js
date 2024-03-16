"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import React, { useEffect } from "react"
import {
  buttonColor,
  buttonColorHover,
  franklinDemiCond,
} from "../../globalStyle"
import Image from "next/image"
import logoWhite from "./images/logo-white-svg.svg"
import { useStore } from "zustand"
import utilityStore from "@/config/store"
import { useSearchParams } from "next/navigation"

const ContributeButton = ({ parameters }) => {
  const { id, capitalizeFirstName: firstName, condition } = parameters
  const { setPopup } = useStore(utilityStore)

  const searchParams = useSearchParams()
  useEffect(() => {
    const payment_intent = searchParams.get("payment_intent")
    const redirect_status = searchParams.get("redirect_status")
    if (!!payment_intent && redirect_status === "succeeded") {
      setPopup({
        data: {
          payment_intent,
        },
        content: "PaymentReceipt",
        maxW: "582px",
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const handleClick = () => {
    setPopup({
      data: {
        id,
        firstName,
        condition,
      },
      content: "MultiStepForm",
      maxW: "582px",
      bgNotClicable: true,
    })
  }
  return (
    <Flex
      bgColor={buttonColor}
      _hover={{
        bgColor: buttonColorHover,
      }}
      transition={"background-color 0.5s"}
      borderRadius={"10px"}
      p={"12px 50px"}
      border={"4px solid white"}
      boxShadow={"1px 1px 5px 0px rgba(40, 140, 204, 0.75)"}
      gap={3}
      cursor={"pointer"}
      onClick={handleClick}
    >
      <Image src={logoWhite} alt="logo-white" />
      <Text fontSize={"20px"} fontFamily={franklinDemiCond} color={"white"}>
        Click Here To Contribute
      </Text>
    </Flex>
  )
}

export default ContributeButton
