import { supabase } from "@/config/supabase"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { containerInner, containerPadding } from "./globalStyle"
import Link from "next/link"

export const revalidate = 20

const getRecipient = async () => {
  let { data: recipients, error } = await supabase
    .from("recipients")
    .select("*")
  if (recipients) {
    return recipients
  }
  if (error) console.log({ error })
}

const HomePage = async () => {
  const recipients = await getRecipient()
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
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Heading>List of Recipients </Heading>
          <Text>{"(Click a recipient below to view) v0.0.2"}</Text>
        </Flex>

        {/* <Box>{JSON.stringify(recipients, null, 2)}</Box> */}

        {recipients?.map((recipient, index) => {
          const { first_name } = recipient
          return (
            <div key={index}>
              <Link href={`/recipient/${first_name}`} shallow>
                <Text fontSize={"32px"}>{first_name}</Text>
              </Link>
            </div>
          )
        })}
      </Flex>
      <Flex h={"100vh"} w={"100%"}></Flex>
      <Flex h={"100vh"} w={"100%"}></Flex>
      <Flex h={"100vh"} w={"100%"}></Flex>
    </Flex>
  )
}

export default HomePage
