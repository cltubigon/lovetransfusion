"use client"
import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerInner,
  containerPadding,
  franklinMedium,
  lightBlue,
} from "../../globalStyle"
// import bgImageDesktop from "./images/section-1-bg-mobile-proper-reduced.webp"
import Image from "next/image"
import bgImageMobile from "./images/section-1-bg-mobile-proper-reduced.webp"

const TitleSection = ({firstName}) => {
  return (
    <Flex
    bgImage={'url("./images/section-1-bg-proper-desktop-reduced.webp")'}
    bgSize={"cover"}

      // bgImage={{
      //   phs: "none",
      //   tls: 'url("./images/section-1-bg-proper-desktop-reduced.webp")',
      // }}
      // bgSize={{ phs: "unset", tls: "cover" }}
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
          mt={"12px"}
          mb={"13px"}
          color={"#2F8EDD"}
          fontFamily={franklinMedium}
          fontWeight={"400"}
          textAlign={"center"}
          fontSize={{ phs: "40px", tls: "54px" }}
          lineHeight={"40px"}
        >{`Welcome to ${firstName}’s Page!`}</Heading>
      </Flex>

      <Flex display={{ tls: 'none' }} pos={'absolute'} top={'0px'} h={'100%'} w={'100%'} >
        <Image
          alt="multiple hearts"
          src={bgImageMobile}
          placeholder="blur"
          priority={true}
          quality={100}
          fill
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw"
          loading="eager"
          style={{
            objectFit: "cover",
            userSelect: "none",
          }}
        />
      </Flex>
    </Flex>
  )
}

export default TitleSection
