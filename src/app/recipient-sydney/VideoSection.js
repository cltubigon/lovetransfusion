"use client"
import { Button, Flex, Text } from "@chakra-ui/react"
import {
  containerInner,
  containerPadding,
  franklinDemiCond,
  franklinMedium,
  lightBlue,
} from "../globalStyle"
import WistiaPlayer from "../components/WistiaPlayer"

const VideoSection = () => {
  return (
    <Flex sx={containerPadding} pt={"75px"} pb={"33px"}>
      <Flex sx={containerInner}>
        <Flex w={"100%"} flexDir={"column"} alignItems={"center"} gap={"16px"}>
          <Text
            fontFamily={franklinMedium}
            fontSize={"28px"}
            color={lightBlue}
            mb={"10px"}
          >{`Short Video Explains How We Are Raising Awareness Of {Name}’s Story`}</Text>
          <WistiaPlayer videoId="hy6qn8dic2" wrapper="video-1" />
          <Button
            mt={"10px"}
            fontFamily={franklinDemiCond}
            fontSize={"24px"}
            color={"white"}
            bgColor={lightBlue}
            p={"32px 40px"}
            _hover={{
              bgColor: lightBlue,
            }}
          >
            {"Click Here To Help Raise Awareness Of Sydney's Story"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoSection
