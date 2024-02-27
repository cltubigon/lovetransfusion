import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { containerInner, containerPadding, franklinMedium, lightBlue } from "../globalStyle"

const TitleSection = () => {
  return (
    <Flex
      bgImage={'url("./images/section-1-bg.png")'}
      bgSize={"cover"}
      sx={containerPadding}
      position={"relative"}
      pt={{ phs: "50px", tll: "78px" }}
      pb={{ phs: "50px", tll: "79px" }}
    >
      <Flex
        sx={containerInner}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"27px"}
        zIndex={2}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          flexDir={{ phs: "column", tls: "row" }}
        >
          <Text
            fontSize={"14px"}
            bgColor={"#2F8EDC"}
            color={"white"}
            pt={"4px"}
            pb={"3px"}
            px={"20px"}
            borderRadius={"100px"}
          >
            Childhood Cancer
          </Text>
          <Text color={lightBlue} fontSize={"14px"}>
            Love Transfusion - January 9, 2024
          </Text>
        </Flex>
        <Heading
          color={"#2F8EDD"}
          fontFamily={franklinMedium}
          fontWeight={"400"}
          fontSize={"54px"}
        >{`Welcome to ${"{Name}"}’s Page!`}</Heading>
      </Flex>
    </Flex>
  )
}

export default TitleSection
