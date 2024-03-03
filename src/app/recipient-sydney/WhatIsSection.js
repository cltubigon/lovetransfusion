import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  SegoePrint,
  containerInner,
  containerPadding,
  franklinDemiCond,
  lightBlue,
} from "../globalStyle"
import Link from "next/link"
import Image from "next/image"
import TestimonyImageDesktop from "./images/family-proper-desktop.png"
import TestimonyImageMobile from "./images/family-proper-mobile.png"
import heart from "./images/heart-proper.png"

const WhatIsSection = () => {
  return (
    <Flex sx={containerPadding} py={{ phs: '49px', tls: "102px" }}>
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
              What is a diffuse intrinsic pontine glioma?
            </Text>
            <Text fontSize={"20px"} lineHeight={"22px"}>
              According to Boston Childrens Hospital: “Diffuse intrinsic pontine
              gliomas (DIPGs) are highly-aggressive and difficult-to-treat brain
              tumors found at the base of the brain. They are glial tumors,
              meaning they arise from the brain’s glial tissue — tissue made up
              of cells that help support and protect the brain’s neurons. These
              tumors are found in an area of the brainstem called the pons,
              which controls many of the body’s most vital functions such as
              breathing, blood pressure and heart rate.”
            </Text>
            <Text fontSize={"20px"} lineHeight={"22px"}>
              Learn more:{" "}
              <Link href={"#"} style={{ color: lightBlue }}>
                DIPG
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
            flexDir={{ phs: 'column', tls: 'row' }}
          >
            <Flex flexDir={"column"} maxW={"408px"}>
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
            <Flex maxW={"310px"}>
              <Flex boxShadow={"3px 3px 3px 0px rgba(0, 0, 0, 0.22)"}>
                <Image src={TestimonyImageDesktop} alt="testimony" />
              </Flex>
            </Flex>
            <Flex pos={"absolute"} left={{ phs: '10px', tls: "-40px" }} top={{ phs: '-40px', tls: "-32px" }} maxW={"101px"}>
              <Image src={heart} alt="love transfusion" />
            </Flex>
          </Flex>
          <Text
            fontFamily={SegoePrint}
            color={lightBlue}
            fontSize={"19px"}
            mx={"auto"}
            mt={{phs: '19px', tls: "73px"}}
            textAlign={'center'}
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
