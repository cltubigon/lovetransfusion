"use client"
import { Flex, Text } from "@chakra-ui/react"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
  franklinDemiCond,
  franklinMedium,
  lightBlue,
} from "../../globalStyle"
import WistiaPlayer from "../../components/WistiaPlayer"
import Link from "next/link"

const VideoSection = () => {
  return (
    <Flex sx={containerPadding} pt={"80px"} pb={"33px"}>
      <Flex sx={containerInner}>
        <Flex w={"100%"} flexDir={"column"} alignItems={"center"} gap={"16px"}>
          <Text
            fontFamily={franklinMedium}
            fontSize={"28px"}
            color={lightBlue}
            mb={"14px"}
            lineHeight={"33px"}
            textAlign={'center'}
          >{`Short Video Explains How We Are Raising Awareness Of {Name}’s Story`}</Text>
          <WistiaPlayer videoId="nx9htrqsu9" wrapper="video-1" />
          <Link href={"/"}>
            <Flex
              fontFamily={franklinDemiCond}
              fontSize={"24px"}
              color={"white"}
              bgColor={buttonColor}
              p={{phs: "18px 15px", tls: "18px 40px"}}
              lineHeight={"28px"}
              textAlign={'center'}
              borderRadius={'md'}
              maxW={"100%"}
              _hover={{
                bgColor: buttonColorHover,
              }}
              transition={"background-color 0.5s"}
            >
              {"Click Here To Help Raise Awareness Of Sydney's Story"}
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoSection
