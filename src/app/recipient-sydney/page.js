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

const RecipientsPage = () => {
  return (
    <>
      <LogoSection />
      <Flex
        sx={containerPadding}
        position={'relative'}
        // bgImage={"/images/section-1-bg.png"}
        // bgPos={"center center"}
        // bgSize={"cover"}
        pt={'75px'}
        pb={'79px'}
        mt={10}
      >
        <Image
      alt="Mountains"
      src={'/images/section-1-bg.png'}
      // placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
        <Flex sx={containerInner} flexDir={"column"} alignItems={"center"} justifyContent={'center'} gap={'27px'}>
          <Flex alignItems={"center"} gap={4}>
            <Text
              fontSize={"14px"}
              bgColor={"#2F8EDC"}
              color={"white"}
              py={"6px"}
              px={"20px"}
              borderRadius={"100px"}
            >
              Childhood Cancer
            </Text>
            <Text color={lightBlue} fontSize={"14px"}>Love Transfusion - January 9, 2024</Text>
          </Flex>
          <Heading
            color={"#2F8EDD"}
            fontFamily={"var(--franklinGothicMediumCond)"}
            fontWeight={'400'}
            fontSize={"54px"}
          >{`Welcome to ${"Name"}’s Page!`}</Heading>
        </Flex>
      </Flex>

      <Box bgColor={'blue'} h={'10vh'} ></Box>
      <Flex h={"120vh"}></Flex>
    </>
  )
}

export default RecipientsPage
