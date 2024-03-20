import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import { lightBlue } from "./globalStyle"

const HomePage = async () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Link href={"/recipient"}>
        <Text fontSize={"22px"}>Goto</Text>
        <Heading color={lightBlue}>Recipient Page</Heading>
        <Flex gap={4}>
          <Link href={"/login"}>
            <Text>Login</Text>
          </Link>
          <Link href={"/privates"}>
            <Text>Private</Text>
          </Link>
          <Link href={"/account"}>
            <Text>Account</Text>
          </Link>
        </Flex>
      </Link>
    </Flex>
  )
}

export default HomePage
