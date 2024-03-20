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
      flexDir={'column'}
    >
      <Link href={"/recipient"}>
        <Text fontSize={"22px"}>Goto</Text>
        <Heading color={lightBlue}>Recipient Page</Heading>
      </Link>
      <Flex gap={4} justifyContent={'flex-start'}>
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
    </Flex>
  )
}

export default HomePage
