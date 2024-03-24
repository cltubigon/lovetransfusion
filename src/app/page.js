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
      </Link>
    </Flex>
  )
}

export default HomePage
