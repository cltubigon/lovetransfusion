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

const Amount = ({ setactiveStep }) => {
  console.log("amount rendered")
  const { register, handleSubmit, formState, watch } = useForm()
  const { errors } = formState

  const [value, setValue] = useState("")
  const {
    popup: { data },
  } = useStore(utilityStore)

  useEffect(() => {
    console.log("value", value)
  }, [value])

  const handleOnChange = (e) => {
    const initial = e.target.value
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // Change 'USD' to your desired currency code
      minimumFractionDigits: 2, // Enforces 2 decimal places
    })

    const formattedNumber = formatter.format(initial)
    console.log("formattedNumber", formattedNumber)
    setValue(formattedNumber)

    // console.log("initial", initial)
    // const parsed = parseFloat(initial).toFixed(2)
    // console.log("!!parsed", !!parsed)
    // if (initial === "") {
    //   setValue("")
    //   return
    // }
    // if (initial !== "") setValue(parsed)
  }

  if (!data) return <p>No data to show</p>

  const onSubmit = (data) => {
    console.log("data", data)
    setactiveStep(3)
  }

  const format = (val) => {
    console.log("val", val)
    if (val) {
      console.log("val", val)
    //   const parsedValue = parseFloat(val)
    //   console.log("parsedValue", parsedValue)
      const value = `$` + val
      console.log("value", value)
      const int = parseFloat(value)
      console.log('int', int)
      
      return value
    }
    if (!val) return ""
  }
  const parse = (val) => val.replace(/^\$/, '')

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.price}>
          {/* <Input
            textAlign={"center"}
            placeholder="Enter custom amount"
            readOnly
            type="text"
            value={value}
          />
          <Input
            textAlign={"center"}
            id="price"
            {...register("price")}
            onChange={handleOnChange}
            border={"1px solid #8c8c8c"}
            placeholder="Enter custom amount"
            fontSize={"17px"}
            py={7}
            min={5}
            type="number"
          /> */}
          <NumberInput
            defaultValue={0}
            onChange={(valueString) => setValue(parse(valueString))}
            value={format(value)}
          >
            <NumberInputField
              textAlign={"center"}
              border={"1px solid #8c8c8c"}
              placeholder="Enter custom amount"
              fontSize={"17px"}
              py={7}
              min={5}
              maxLength={10}
              id="price"
              {...register("price")}
            />
          </NumberInput>
          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>
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
          type="submit"
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
      </form>
    </div>
  )
}

export default Amount
