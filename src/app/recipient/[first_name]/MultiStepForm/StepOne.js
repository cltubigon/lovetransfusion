import {
  buttonColor,
  buttonColorHover,
  franklinBook,
  franklinDemiCond,
  lightBlue,
  openSans,
} from "@/app/globalStyle"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import imagePlaceholder from "./images/placeholder-image.png"
import logo from "./images/full-color-logo.png"
import { FiArrowRight } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import { useStore } from "zustand"
import utilityStore from "@/config/store"

const StepOne = ({ setactiveStep }) => {
  const {
    popup: { data },
  } = useStore(utilityStore)
  if (!data) return <p>No data to show</p>

  const { firstName } = data
  const borderColor = "#dadada"
  const donationColumns = {
    flexDir: "column",
    alignItems: "center",
    rowGap: 0,
    flexBasis: "33.33%",
    pt: 2,
    pb: "10px",
  }
  const gotoStepTwo = () => {
    console.log("button clicked")
    setactiveStep(2)
  }
  return (
    <Flex flexDir={"column"} gap={3}>
      <Flex justifyContent={"center"} pb={"10px"}>
        <Image src={logo} alt="lovetransfusion-logo" quality={100} />
      </Flex>
      <Heading
        textAlign={"center"}
        as={"h2"}
        fontFamily={franklinDemiCond}
        fontSize={"26px"}
        color={lightBlue}
      >
        {`${firstName}’s Care Package`}
      </Heading>
      <Box h={"4px"} w={"120px"} bgColor={lightBlue} mx={"auto"} />
      <Text fontSize={"20px"} lineHeight={"28px"}>
        {`Thank you for considering becoming a sponsor of ${firstName}’s care package.`}
      </Text>
      <Text fontSize={"20px"} lineHeight={"28px"}>
        {`Without help from people like you, we would not be able to send care packages to ${firstName} and other children battling [condition].`}
      </Text>
      <Text textAlign={"center"} fontSize={"11px"} color={"#b3b3b3"} mb={2}>
        {
          "* Love Transfusion Inc is a 501(c)(3) nonprofit organization. Donations are tax-deductible."
        }
      </Text>
      <Flex justifyContent={"center"} mb={5}>
        <Image src={imagePlaceholder} alt="placeholder" quality={100} />
      </Flex>

      <Flex flexDir={"column"} mb={5}>
        <Flex border={`1px solid ${borderColor}`}>
          <Flex sx={donationColumns}>
            <Text color={"#404040"} fontSize={"20px"} fontWeight={"600"}>
              $0
            </Text>
            <Text lineHeight={"1.1em"} color={"#8c8c8c"} fontSize={"18px"}>
              Raised
            </Text>
          </Flex>
          <Flex
            sx={donationColumns}
            borderLeft={`1px solid ${borderColor}`}
            borderRight={`1px solid ${borderColor}`}
          >
            <Text color={"#404040"} fontSize={"20px"} fontWeight={"600"}>
              2
            </Text>
            <Text lineHeight={"1.1em"} color={"#8c8c8c"} fontSize={"18px"}>
              Donations
            </Text>
          </Flex>
          <Flex sx={donationColumns}>
            <Text color={"#404040"} fontSize={"20px"} fontWeight={"600"}>
              $500
            </Text>
            <Text lineHeight={"1.1em"} color={"#8c8c8c"} fontSize={"18px"}>
              Goal
            </Text>
          </Flex>
        </Flex>
        <Flex
          border={`1px solid ${borderColor}`}
          mt={"-1px"}
          flexDir={"column"}
          pt={5}
          pb={5}
          px={6}
          gap={2}
        >
          <Flex
            w={"100%"}
            h={"20px"}
            boxShadow={"0px 0px 5px 1px rgba(0, 0, 0, 0.09) inset"}
            bgColor={"#00000017"}
            borderRadius={"50px"}
          >
            <Box
              bgColor={lightBlue}
              // w={"20%"} // Width of the progress
              h={"100%"}
              borderRadius={"50px"}
            />
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"}>$0 amount</Text>
            <Text fontSize={"12px"}>$1,000 amount</Text>
          </Flex>
        </Flex>
      </Flex>
      <Button
        color={"white"}
        fontSize={"16px"}
        fontFamily={openSans}
        bgColor={buttonColor}
        _hover={{ bgColor: buttonColorHover }}
        transition={"background-color 0.5s"}
        w={"full"}
        rightIcon={<FiArrowRight fontSize={"18px"} />}
        borderRadius={"4px"}
        p={"25px 16px"}
        onClick={gotoStepTwo}
      >
        Donate Now
      </Button>
      <Flex
        color="#00d084"
        alignItems={"center"}
        gap={2}
        justifyContent={"center"}
      >
        <FaLock fontSize={"12px"} />
        <Text fontSize={"12px"}>Secure donation</Text>
      </Flex>
    </Flex>
  )
}

export default StepOne
