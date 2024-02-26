import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  Text,
  theme,
} from "@chakra-ui/react"
import React from "react"
import { franklinGothicBookItalic } from "../fonts"
import Image from "next/image"
import LogoSection from "./LogoSection"
import { containerInner, containerPadding, lightBlue } from "../globalStyle"
// import sectionOneBg from "./images/section-1-bg.png"
import sectionOneBg from "./images/section-1-bg.png"

const RecipientsPage = () => {
  return (
    <>
      <LogoSection />
      <Flex sx={containerPadding} position={"relative"} pt={{ phs: '50px', tll: "78px" }} pb={{ phs: '50px', tll: "79px" }}>
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
            fontFamily={"var(--franklinGothicMediumCond)"}
            fontWeight={"400"}
            fontSize={"54px"}
          >{`Welcome to ${"{Name}"}’s Page!`}</Heading>
        </Flex>
        <Image
          alt="Mountains"
          src={sectionOneBg}
          placeholder="blur"
          quality={100}
          fill
          // sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </Flex>

      {/* <Box bgColor={"blue"} h={"10vh"}></Box> */}
      <Flex h={"120vh"}></Flex>
    </>
  )
}

export default RecipientsPage
