"use client"
import { Button, Flex, Text } from "@chakra-ui/react"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
  franklinDemiCond,
  franklinMedium,
  lightBlue,
} from "../globalStyle"
import WistiaPlayer from "../components/WistiaPlayer"

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
          >{`Short Video Explains How We Are Raising Awareness Of {Name}’s Story`}</Text>
          <WistiaPlayer videoId="hy6qn8dic2" wrapper="video-1" />
          <Button
            mt={"10px"}
            fontFamily={franklinDemiCond}
            fontSize={"24px"}
            color={"white"}
            bgColor={buttonColor}
            p={"32px 40px"}
            lineHeight={"33px"}
            _hover={{
              bgColor: buttonColorHover,
            }}
            transition={"background-color 0.5s"}
          >
            {"Click Here To Help Raise Awareness Of Sydney's Story"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoSection
