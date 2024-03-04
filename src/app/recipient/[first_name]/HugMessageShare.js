import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {
  containerInner,
  containerPadding,
  franklinMedium,
  lightBlue,
} from "../../globalStyle"
import CareIcon from "./images/care.svg"
import heartMessage from "./images/heart-message.png"
import ShareModal from "./ShareModal"
import Link from "next/link"

const HugMessageShare = ({ parameters }) => {
  const { firstName, hugs } = parameters
  const buttonStyle = {
    borderRadius: "10px",
    boxShadow: "3px 3px 3px 0px rgba(47, 142, 221, 0.32)",
    border: `2px solid ${lightBlue}`,
    p: "8px 15px 6px",
    justifyContent: "center",
    alignItems: "center",
    bgColor: "white",
    cursor: "pointer",
    w: "176px",
  }
  return (
    <Box py={"9px"} w={"100%"} bgColor={"#E0F3FF"}>
      <Flex
        sx={containerPadding}
        py={"26px"}
        borderTop={"1px solid white"}
        borderBottom={"1px solid white"}
      >
        <Flex
          sx={containerInner}
          gap={{ phs: 4, tls: 6, lts: "55px" }}
          alignItems={{ phs: "center", tls: "unset" }}
          justifyContent={{ phs: "flex-start", tls: "center" }}
          flexDir={{ phs: "column", tls: "row" }}
        >
          <Flex sx={buttonStyle}>
            <Flex alignItems="center" gap="13px">
              <Text fontSize={"22px"} fontFamily={franklinMedium}>
                Hug
              </Text>
              <Image src={CareIcon} alt="care icon" quality={100} />
              <Text fontSize={"22px"} fontFamily={franklinMedium}>
                {hugs}
              </Text>
            </Flex>
          </Flex>
          <Link href={`#comment-section`}>
            <Flex sx={buttonStyle}>
              <Flex alignItems={"center"} gap={"13px"}>
                <Text fontSize={"22px"} fontFamily={franklinMedium}>
                  Message
                </Text>
                <Image src={heartMessage} alt="care icon" quality={100} />
              </Flex>
            </Flex>
          </Link>
          <ShareModal buttonStyle={buttonStyle} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default HugMessageShare
