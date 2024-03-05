import { supabase } from "@/config/supabase"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { containerInner, containerPadding } from "./globalStyle"
import Link from "next/link"
import Recipients from "./Recipients"

const HomePage = () => {
  return (
    <Flex
      sx={containerPadding}
      py={10}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex
        sx={containerInner}
        flexDir={"column"}
        alignItems={"flex-start"}
        gap={4}
      >
        <Recipients />
      </Flex>
      <Flex h={"100vh"} w={"100%"}></Flex>
      <Flex h={"100vh"} w={"100%"}></Flex>
      <Flex h={"100vh"} w={"100%"}></Flex>
    </Flex>
  )
}

export default HomePage
