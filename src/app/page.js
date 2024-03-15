import { Flex, Heading, Text } from "@chakra-ui/react"
import { containerInner, containerPadding } from "./globalStyle"
import Link from "next/link"
import { supabase } from "@/config/supabase/supabase"

export const revalidate = 5

const HomePage = async () => {
  const { data: recipients, error } = await supabase.from("recipients").select()
  if (!recipients) {
    return <h2>No recipient found</h2>
  }
  if (error) console.log({ error })

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
          <Text>{"v0.1.0 - Added Stripe Integration"}</Text>
        </Flex>

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
