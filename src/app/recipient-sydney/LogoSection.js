import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import { containerInner, containerPadding } from "../globalStyle"

const LogoSection = () => {
  return (
    <Flex
      sx={containerPadding}
      bgColor={"#2F8EDD"}
      py={5}
      borderBottom={"3px solid #ABDCFF"}
    >
      <Flex sx={containerInner} justifyContent={'space-between'} >
        <Flex>
          <Image
            src={"/images/lt-logo-white.png"}
            priority={true}
            alt="white-logo"
            width={396}
            height={60}
          />
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          color={"white"}
          gap={"3px"}
          pt={"3px"}
        >
          <Text fontSize={"14.3px"} lineHeight={"17px"}>
            Love Transfusion Inc - A 501(c)(3) Nonprofit Organization
          </Text>
          <Text
            fontSize={"18.5px"}
            fontFamily={"var(--franklinGothicMediumCond)"}
            lineHeight={"22px"}
          >
            Connecting People Who Hurt With Those Who Care
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LogoSection
