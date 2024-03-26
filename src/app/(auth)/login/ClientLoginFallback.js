"use client"
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import logo from "@/app/recipients/[first_name]/MultiStepForm/images/full-color-logo.png"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
} from "@/app/globalStyle"

export default function ClientLogin() {
  const [showPassword, setshowPassword] = useState(false)
  const inputStyle = {
    bgColor: "white",
    borderColor: "#ccc",
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
        <Link href={"/"}>
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
          <form style={{width: '100%'}}>
            <Flex
              flexDir={"column"}
              gap={2}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <FormControl isRequired>
                {/*********** Email ***********/}
                {/* <FormLabel htmlFor="name">Email:</FormLabel> */}
                <Input
                  type="text"
                  sx={inputStyle}
                  id="email"
                  placeholder="Email"
                />
              </FormControl>

              {/*********** Password ***********/}
              <InputGroup>
                <FormControl isRequired>
                  {/* <FormLabel htmlFor="name">Password:</FormLabel> */}
                  <Input
                    w={"100%"}
                    type={showPassword ? "text" : "password"}
                    sx={inputStyle}
                    id="password"
                    placeholder="Password"
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
