import { supabase } from "@/config/supabase"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { containerInner, containerPadding } from "./globalStyle"
import Link from "next/link"

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
    <Flex sx={containerPadding} py={10} flexDir={'column'} alignItems={'center'} >
      <Flex sx={containerInner} flexDir={"column"} alignItems={'flex-start'} gap={4}>
        <Flex flexDir={'column'}  justifyContent={"center"} >
          <Heading>List of Recipients </Heading>
          <Text>{"(Click a recipient below to view) v0.0.1"}</Text>
        </Flex>

        {recipients?.map((recipient, index) => {
          const { first_name } = recipient
          return (
            <Link key={index} href={`/recipient/${first_name}`}>
              <Text fontSize={"32px"}>{first_name}</Text>
            </Link>
          )
        })}
      </Flex>
      <Flex h={'100vh'} w={'100%'} ></Flex>
      <Flex h={'100vh'} w={'100%'} ></Flex>
      <Flex h={'100vh'} w={'100%'} ></Flex>
    </Flex>
  )
}

export default HomePage
