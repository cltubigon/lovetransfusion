"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  buttonColor,
  buttonColorHover,
  franklinDemiCond,
} from "../../globalStyle"
import Image from "next/image"
import logoWhite from "./images/logo-white-svg.svg"
import { useStore } from "zustand"
import utilityStore from "@/config/store"

const ContributeButton = ({ parameters }) => {
  const { id, capitalizeFirstName: firstName } = parameters
  const { setPopup } = useStore(utilityStore)

  const handleClick = () => {
    setPopup({
      data: {
        id,
        firstName,
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
