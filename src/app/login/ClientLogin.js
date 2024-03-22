"use client"
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react"
import { login, signup } from "./actions"
import { useForm } from "react-hook-form"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
} from "../globalStyle"
import logo from "../recipients/[first_name]/MultiStepForm/images/full-color-logo.png"
import Link from "next/link"
import Image from "next/image"
import { IoEyeOutline } from "react-icons/io5"
import { IoEyeOffOutline } from "react-icons/io5"
import { useState } from "react"

export default function ClientLogin() {
  const toast = useToast()
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const [showPassword, setshowPassword] = useState(false)
  const inputStyle = {
    bgColor: "white",
    borderColor: "#ccc",
  }
  const onSubmit = (data) => {
    console.log("data", data)
    const initiateLogin = async () => {
      const error = await login(data)
      if (error) {
        toast({
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
      }
    }
    initiateLogin()
  }
  const handlePasswordVisibility = () => {
    setshowPassword(() => !showPassword)
  }
  return (
    <Flex sx={containerPadding} h={"100vh"} alignItems={"center"}>
      <Flex
        sx={containerInner}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDir={"column"}
      >
        <Link href={"/recipients"}>
          <Flex mb={6}>
            <Image src={logo} quality={100} priority={true} alt="logo" />
          </Flex>
        </Link>
        <Flex
          flexDir={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          maxWidth="400px"
          w={"100%"}
        >
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Flex
              flexDir={"column"}
              gap={2}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <FormControl isInvalid={errors.email} isRequired>
                {/*********** Email ***********/}
                {/* <FormLabel htmlFor="name">Email:</FormLabel> */}
                <Input
                  type="text"
                  sx={inputStyle}
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Enter your email address",
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              {/*********** Password ***********/}
              <InputGroup>
                <FormControl isInvalid={errors.password} isRequired>
                  {/* <FormLabel htmlFor="name">Password:</FormLabel> */}
                  <Input
                    w={"100%"}
                    type={showPassword ? "text" : "password"}
                    sx={inputStyle}
                    id="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    pos={"relative"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>

                  {/* <Flex onClick={handlePasswordVisibility}>
                  {!showPassword && (
                    <Flex pos={"absolute"} bottom={2} right={5}>
                    <IoEyeOutline fontSize={"24px"} />
                    </Flex>
                    )}
                    {showPassword && (
                      <Flex pos={"absolute"} bottom={2} right={5}>
                      <IoEyeOffOutline fontSize={"24px"} />
                      </Flex>
                      )}
                    </Flex> */}
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
              </InputGroup>
            </Flex>

            <Flex gap={3}>
              <Button
                mt={3}
                w={"100%"}
                bgColor={buttonColor}
                _hover={{ bgColor: buttonColorHover }}
                color={"white"}
                letterSpacing={"1px"}
                type="submit"
              >
                Login
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}
