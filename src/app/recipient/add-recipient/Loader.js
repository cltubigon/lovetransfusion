import { lightBlue } from "@/app/globalStyle"
import { Flex, Heading, Spinner } from "@chakra-ui/react"
import React from "react"

const Loader = () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      bgColor={"rgb(255 255 255 / 0.7)"}
      pos={"absolute"}
      top={0}
      left={0}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={10}
      flexDir={"column"}
      gap={4}
    >
      <Spinner size={"xl"} color={lightBlue} />
      <Heading>Uploading your data..</Heading>
    </Flex>
  )
}

export default Loader
