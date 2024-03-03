// "use client"
import { supabase } from "@/config/supabase"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
// import { useEffect, useState } from "react"

const testing = async () => {
  let { data: recipients, error } = await supabase
    .from("recipients")
    .select("*")

  if (recipients) {
    console.log({ recipients })
    return recipients
  }
  if (error) console.log({ error })
}

export default async function Home() {
  const recipients = await testing()

  return (
    <Box px={4}>
      <Heading>Home page</Heading>
      {recipients?.map((recipient, index) => {
        return <Text key={index}>{recipient.first_name}</Text>
      })}
    </Box>
  )
}
