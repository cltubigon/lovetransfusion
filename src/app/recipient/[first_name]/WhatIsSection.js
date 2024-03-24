import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  SegoePrint,
  containerInner,
  containerPadding,
  franklinDemiCond,
  lightBlue,
} from "../../globalStyle"
import Link from "next/link"
import Image from "next/image"

import heart from "./images/heart-proper.png"
import TestimonyImage from "./TestimonyImage"

const WhatIsSection = ({
  parameters: {
    what_is,
    according_to,
    according_to_paragraph,
    learn_more_url,
    learn_more_text,
  },
}) => {
  return (
    <Flex sx={containerPadding} py={{ phs: "49px", tll: "70px", ltl: "102px" }}>
      <Flex sx={containerInner} justifyContent={"center"}>
        <Flex maxW={"1000px"} flexDir={"column"}>
          <Flex flexDir={"column"} gap={"26px"}>
            <Text
              fontFamily={franklinDemiCond}
              fontSize={"30px"}
              lineHeight={"33px"}
              color={lightBlue}
              pb={"4px"}
            >
              What is {what_is}?
            </Text>
            <Text fontSize={"20px"} lineHeight={"22px"}>
              According to {according_to}: “{according_to_paragraph}”
            </Text>
            <Text fontSize={"20px"} lineHeight={"22px"}>
              Learn more:{" "}
              <Link target="_blank" href={learn_more_url} style={{ color: lightBlue }}>
                {learn_more_text}
              </Link>
            </Text>
          </Flex>
          <Flex
            gap={3}
            border={"2px solid #E0F3FF"}
            borderRadius={"10px"}
            justifyContent={"space-between"}
            mt={"85px"}
            p={{ phs: "55px 25px 25px", tls: "25px 80px 25px 81px" }}
            pos={"relative"}
            flexDir={{ phs: "column", tll: "row" }}
          >
            <Flex flexDir={"column"} maxW={{ phs: "100%", tll: "408px" }}>
              <Text
                fontSize={"30px"}
                fontFamily={franklinDemiCond}
                color={lightBlue}
                lineHeight={"33px"}
                mt={"7px"}
                mb={"4px"}
              >
                Did You Know?
              </Text>
              <Box maxW={"347px"} h={"2px"} borderTop={"1px solid #E0F3FF"} />
              <Text
                fontSize={"20px"}
                lineHeight={"24px"}
                mt={"10px"}
                pr={"35px"}
              >
                Over 12,000,000 expressions of support and encouragement have
                been sent through Love Transfusion Inc since 2010. Learn more at{" "}
                <span style={{ color: lightBlue }}>
                  <Link href={"/"}>LoveTransfusion.com</Link>
                </span>
                .
              </Text>
            </Flex>
            <Flex maxW={{ phs: "100%", tll: "310px" }}>
              <Flex boxShadow={"3px 3px 3px 0px rgba(0, 0, 0, 0.22)"}>
                <TestimonyImage />
              </Flex>
            </Flex>
            <Flex
              pos={"absolute"}
              left={{ phs: "10px", tls: "-40px" }}
              top={{ phs: "-40px", tls: "-32px" }}
              maxW={"101px"}
            >
              <Image src={heart} alt="love transfusion" />
            </Flex>
          </Flex>
          <Text
            fontFamily={SegoePrint}
            color={lightBlue}
            fontSize={"19px"}
            mx={"auto"}
            mt={{ phs: "19px", tls: "73px" }}
            textAlign={"center"}
          >
            “One word frees us of all the weight and pain in life. That word is
            Love.” - Sophocles
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default WhatIsSection
