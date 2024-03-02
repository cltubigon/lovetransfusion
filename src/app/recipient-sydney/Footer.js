import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerPadding,
  franklinDemiCond,
} from "../globalStyle"
import Image from "next/image"
import footerLogo from "./images/footer-logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Flex flexDir={'column'}>
      <Flex sx={containerPadding} bgColor={"#288CCC"} pt={"30px"} pb={"35px"}>
        <Flex
          maxW="1234px"
          w="100%"
          flexWrap={{
            phs: "wrap",
            tll: "nowrap",
          }}
          gap={{phs: 6, tls: 10}}
          justifyContent={"space-between"}
        >
          <Flex
            flexBasis={{
              phs: "100%",
              tll: "390px",
            }}
            flexDir={"column"}
            gap={3}
          >
            <Flex maxW={"378px"}>
              <Image src={footerLogo} alt="logo" />
            </Flex>
            <Text color={"#f0f8fc"} lineHeight={"22px"}>
              Love Transfusion, Inc. is a non-profit organization with a mission
              to help individuals facing difficult situations. We believe that
              by connecting people who hurt with those who care, the resulting
              expressions of love and encour- agement help ease people through
              life’s most difficult moments.
            </Text>
          </Flex>
          <Flex
            flexBasis={{
              phs: "100%",
              tll: "342px",
            }}
            flexDir={"column"}
            gap={7}
          >
            <Text
              mt={3}
              color={"#f5fbff"}
              lineHeight={"33px"}
              fontSize={"24px"}
            >
              TESTIMONIALS
            </Text>
            <Text color={"#f0f8fc"} lineHeight={"22px"}>
              “Thank you for doing this for my Mom! You have no idea what this
              means to me! Also to able to show her that she has support all
              over the place and she not alone! This means everything! Thank
              You!” Wendy O. – Utah
            </Text>
          </Flex>
          <Flex
            flexBasis={{
              phs: "100%",
              tll: "220px",
            }}
            flexDir={"column"}
            gap={7}
          >
            <Text
              mt={3}
              color={"#f5fbff"}
              lineHeight={"33px"}
              fontSize={"24px"}
            >
              CONTACT
            </Text>
            <Flex flexDir={"column"}>
              <Text
                fontFamily={franklinDemiCond}
                fontSize={"20px"}
                color={"#f0f8fc"}
                lineHeight={"22px"}
              >
                Love Transfusion, Inc.
              </Text>
              <Text color={"#f0f8fc"} lineHeight={"22px"}>
                1201 N Orange St, Suite 799 Wilmington, DE 19801 (800) 291-7276
                | (302) 838-4232
              </Text>
              <Text mt={3} color={"#f0f8fc"} lineHeight={"22px"}>
                501(c)(3) Nonprofit Organization Tax ID #27-2829895
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={containerPadding} bgColor={"#288CCC"} borderTop={'1px solid #77bde5'} pt={"24px"} pb={"25px"}>
        <Flex
          maxW="1234px"
          w="100%"
          flexWrap={{
            phs: "wrap",
            tll: "nowrap",
          }}
          gap={{phs: 2, tls: 10}}
          justifyContent={"space-between"}
        >
          <Text color={"#f5fbff"} fontSize={'14px'} >Copyright © 2010-{currentYear} Love Transfusion, Inc.</Text>
          <Text color={"#f5fbff"} fontSize={'14px'} >A 501(c)(3) Nonprofit Organization – Privacy Policy</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
