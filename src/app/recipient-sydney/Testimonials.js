import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerInner,
  containerPadding,
  franklinDemiCond,
  lightBlue,
} from "../globalStyle"
import testimonial1 from "./images/testimonial1.png"
import testimonial2 from "./images/testimonial2.png"
import testimonial3 from "./images/testimonial3.png"
import Image from "next/image"

const Testimonials = () => {
  const imagesStyle = {
    boxShadow: "0px 0px 20px 5px rgba(47, 142, 221, 0.22)",
  }
  return (
    <Flex sx={containerPadding} pt={"33px"} pb={"60px"}>
      <Flex
        sx={containerInner}
        flexDir={"column"}
        alignItems={"center"}
        gap={{ phs: "20px", tls: "70px" }}
      >
        <Text fontFamily={franklinDemiCond} fontSize={"30px"} color={lightBlue}>
          TESTIMONIALS
        </Text>
        <Flex
          gap={{ phs: 6, tll: "48px" }}
          flexDir={{ phs: "column", tll: "row" }}
        >
          <Flex sx={imagesStyle}>
            <Image src={testimonial1} alt="testimonial1" />
          </Flex>
          <Flex sx={imagesStyle}>
            <Image src={testimonial2} alt="testimonial2" />
          </Flex>
          <Flex sx={imagesStyle}>
            <Image src={testimonial3} alt="testimonial3" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Testimonials
