import {
  buttonColor,
  buttonColorHover,
  franklinBook,
  lightBlue,
  openSans,
} from "@/app/globalStyle"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import imagePlaceholder from "./images/placeholder-image.png"
import logo from "./images/full-color-logo.png"
import { FiArrowRight } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import { useStore } from "zustand"
import utilityStore from "@/config/store"
import { IoArrowBackOutline } from "react-icons/io5"
import HeaderSection from "./HeaderSection"
import { useForm } from "react-hook-form"
import { NumericFormat } from "react-number-format"

const Amount = ({ setactiveStep }) => {
  console.log("amount rendered")

  const [value, setValue] = useState("")
  const {
    popup: { data },
  } = useStore(utilityStore)
  const gotoStepThree = () => {
    setactiveStep(3)
  }

  const handleOnChange = (e) => {
    const val = e.target.value
    setValue(val)
  }
  console.log("value", value)
  return (
    <div>
      <NumericFormat
        required
        prefix={"$"}
        decimalScale={2}
        thousandSeparator=","
        fixedDecimalScale={true}
        allowNegative={false}
        placeholder="Enter custom amount"
        onChange={handleOnChange}
        style={{
          textAlign: "center",
          border: "1px solid #8c8c8c",
          borderRadius: "4px",
          padding: "18px 10px",
          fontSize: "17px",
          width: "100%",
        }}
      />
      <Button
        mt={5}
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
        onClick={gotoStepThree}
        mb={3}
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
    </div>
  )
}

export default Amount
