import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerInner,
  containerPadding,
  franklinMedium,
  lightBlue,
} from "../globalStyle"

const VideoSection = () => {
  return (
    <Flex sx={containerPadding} py={"75px"}>
      <Flex sx={containerInner}>
        <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
          <Text
            fontFamily={franklinMedium}
            fontSize={"28px"}
            color={lightBlue}
          >{`Short Video Explains How We Are Raising Awareness Of {Name}’s Story`}</Text>
          <video controls width="250">
            <source
              src="/video/Love_Transfusion_Testimonials.mp4"
              type="video/mp4"
            />
            <source
              src="/video/Love_Transfusion_Testimonials.mp4"
              type="video/mp4"
            />
            Download the
            <a href="/video/Love_Transfusion_Testimonials.mp4">WEBM</a>
            or
            <a href="/video/Love_Transfusion_Testimonials.mp4">MP4</a>
            video.
          </video>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoSection
