"use client"
import { Flex, Heading } from "@chakra-ui/react"
import React from "react"

const error = ({ error }) => {
  return (
    <Flex h={"100vh"} pt={'100px'} justifyContent={"center"}>
      <Heading>Error: {error.message}</Heading>
    </Flex>
  )
}

export default error
