import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {
  containerInner,
  containerPadding,
  franklinMedium,
} from "../../globalStyle"
import Link from "next/link"

const LogoSection = () => {
  return (
    <Flex sx={containerPadding} bgColor={"#2F8EDD"} py={5}>
      <Flex
        sx={containerInner}
        justifyContent={"space-between"}
        flexWrap={{ phs: "wrap", tll: "nowrap" }}
      >
        <Flex>
          <Link href={"/recipient"}>
            <Image
              src={"/images/lt-logo-white.png"}
              priority={true}
              alt="white-logo"
              width={396}
              height={60}
            />
          </Link>
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
            fontFamily={franklinMedium}
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
