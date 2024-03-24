import { buttonColor, buttonColorHover, lightBlue } from "@/app/globalStyle"
import { Button, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const PageNotFound = () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      gap={4}
    >
      <Heading>Recipient not found</Heading>
      <Link href={"/"}>
        <Button
          fontSize={"20px"}
          color={"white"}
          bgColor={buttonColor}
          _hover={{ bgColor: buttonColorHover }}
          transition={"background-color 0.5s"}
          w={"fit-content"}
        >
          Go Back to Homepage
        </Button>
      </Link>
    </Flex>
  )
}

export default PageNotFound
