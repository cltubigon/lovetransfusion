import { franklinDemiCond, lightBlue } from "@/app/globalStyle"
import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { IoArrowBackOutline } from "react-icons/io5"

const HeaderSection = ({ data }) => {
  const { setactiveStep, title, number, percent } = data
  const goTo = () => {
    setactiveStep(number)
  }
  return (
    <Flex alignItems={"center"} gap={3} pos={"relative"} flexDir={"column"}>
      <Flex pos={"absolute"} left={0} top={2}>
        <IoArrowBackOutline onClick={goTo} fontSize={"20px"} />
      </Flex>
      <Text fontSize={"22px"} fontFamily={franklinDemiCond} >
        {title}
      </Text>
      <Flex
        w={"100%"}
        h={"8px"}
        bgColor={"#00000017"}
      >
        <Box
          bgColor={lightBlue}
          w={percent} // Width of the progress
          h={"100%"}
        />
      </Flex>
    </Flex>
  )
}

export default HeaderSection
