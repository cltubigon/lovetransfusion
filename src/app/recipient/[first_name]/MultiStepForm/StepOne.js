import {
  buttonColor,
  buttonColorHover,
  lightBlue,
  openSans,
} from "@/app/globalStyle"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import imagePlaceholder from "./images/placeholder-image.png"
import { FiArrowRight } from "react-icons/fi"

const StepOne = () => {
  return (
    <Flex flexDir={"column"} gap={3}>
      <Heading textAlign={"center"} as={"h2"} color={lightBlue}>
        {"{Name}’s Care Package"}
      </Heading>
      <Box h={"4px"} w={"120px"} bgColor={lightBlue} mx={"auto"} />
      <Text fontSize={"20px"} lineHeight={'28px'}>
        {
          "Thank you for considering becoming a sponsor of {Name}’s care package."
        }
      </Text>
      <Text fontSize={"20px"} lineHeight={'28px'}>
        {
          "Without help from people like you, we would not be able to send care packages to {Name} and other children battling cancer."
        }
      </Text>
      <Text textAlign={"center"} fontSize={"11px"} color={"#b3b3b3"}>
        {
          "* Love Transfusion Inc is a 501(c)(3) nonprofit organization. Donations are tax-deductible."
        }
      </Text>
      <Image src={imagePlaceholder} alt="placeholder" quality={100} />
      <Button
        color={"white"}
        fontSize={"16px"}
        fontFamily={openSans}
        bgColor={buttonColor}
        _hover={{ bgColor: buttonColorHover }}
        transition={"background-color 0.5s"}
        w={"full"}
        rightIcon={<FiArrowRight fontSize={'18px'} />}
        borderRadius={'4px'}
        p={'25px 16px'}
      >
        Donate Now
      </Button>
    </Flex>
  )
}

export default StepOne
