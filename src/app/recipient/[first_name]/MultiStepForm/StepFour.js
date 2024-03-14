import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { FiArrowRight } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import HeaderSection from "./HeaderSection"
import PaymentForm from "./PaymentForm"

const StepFour = ({ setactiveStep }) => {
  return (
    <Flex flexDir={"column"} gap={3} w={"100%"}>
      {/************ Section 1 ************/}
      <HeaderSection
        data={{
          title: "Payment Details",
          setactiveStep,
          number: 3,
          percent: "75%",
        }}
      />
      {/************ Section 2 ************/}
      <Text fontSize={"17px"} py={6}>
        How would you like to pay for your donation?
      </Text>
      {/************ Section 3 ************/}
      <Flex bgColor={"#fafafa"} flexDir={"column"} px={6}>
        <Flex
          flexDir={"column"}
          borderBottom={"1px solid #dadada"}
          py={6}
          gap={5}
        >
          <Text fontSize={"22px"}>Donation Summary</Text>
          <Flex justifyContent={"space-between"} fontSize={"18px"}>
            <Text>Payment Amount</Text>
            <Text>$10.00</Text>
          </Flex>
          <Flex justifyContent={"space-between"} fontSize={"18px"}>
            <Text>Giving Frequency</Text>
            <Text>One time</Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} py={6}>
          <Flex justifyContent={"space-between"} fontSize={"18px"}>
            <Text>Donation Total</Text>
            <Text fontSize={"20px"} fontWeight={"600"}>
              $10.00
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <PaymentForm />
    </Flex>
  )
}

export default StepFour
