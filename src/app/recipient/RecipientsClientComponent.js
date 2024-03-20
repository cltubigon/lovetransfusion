"use client"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
} from "../globalStyle"
import Link from "next/link"
import multipleUseQuery from "@/hooks/useQuery/multipleUseQuery"
import { useQuery } from "@tanstack/react-query"
import { createClient } from "@/config/supabase/supabaseClient"

export const revalidate = 5

const RecipientsClientComponent = () => {
  const supabase = createClient()
  const { data: recipients, error } = useQuery(
    multipleUseQuery({
      supabase,
      queryKey: ["recipients"],
      table: "recipients",
      select: "first_name",
    })
  )
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
          <Link href={"/"}>
            <Heading>List of Recipients</Heading>
          </Link>
          <Text>{"v0.1.4 - Temporarily removed video section and added image upload feature"}</Text>
        </Flex>
        <Link href={"/recipient/add-recipient"}>
          <Button
            bgColor={buttonColor}
            _hover={{ buttonColorHover }}
            color={"white"}
          >
            Add New Recipient
          </Button>
        </Link>

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
    </Flex>
  )
}

export default RecipientsClientComponent
