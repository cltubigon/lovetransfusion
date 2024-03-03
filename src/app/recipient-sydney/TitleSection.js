import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { containerInner, containerPadding, franklinMedium, lightBlue } from "../globalStyle"

const TitleSection = () => {
  return (
    <Flex
      bgImage={{ phs: 'url("./images/section-1-bg-mobile-proper")', tls: 'url("./images/section-1-bg-proper-desktop.png")' }}
      bgSize={"cover"}
      sx={containerPadding}
      position={"relative"}
      pt={{ phs: "40px", tls: "78px" }}
      pb={{ phs: "20px", tls: "79px" }}
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
        mt={'12px'}
        mb={'13px'}
          color={"#2F8EDD"}
          fontFamily={franklinMedium}
          fontWeight={"400"}
          textAlign={'center'}
          fontSize={{ phs: '40px', tls: "54px" }}
          lineHeight={"40px"}
        >{`Welcome to ${"{Name}"}’s Page!`}</Heading>
      </Flex>
    </Flex>
  )
}

export default TitleSection
