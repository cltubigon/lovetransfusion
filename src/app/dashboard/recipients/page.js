import {
  buttonColor,
  buttonColorHover,
  franklinMedium,
  lightBlue,
} from "@/app/globalStyle"
import { isAuthenticated } from "@/config/supabase/isAuthenticated"
import { createServer } from "@/config/supabase/supabaseServer"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export const dynamic = "force-dynamic"

const Recipients = async () => {
  await isAuthenticated("/login?next=dashboard/recipients")
  const supabase = createServer()
  //   const { data, error } = await supabase.auth.getUser()
  const { data, error } = await supabase.from("recipients").select()

  const innerCell = {
    width: "25%",
    py: 1,
    px: 4,
  }

  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Flex py={6} flexDir={"column"} gap={1} px={{ phs: 0, tls: 2 }}>
        <Heading color={lightBlue}>List of Recipients</Heading>
      </Flex>
      <Flex
        justifyContent={"space-around"}
        fontFamily={franklinMedium}
        textTransform={"capitalize"}
        py={2}
      >
        <Text sx={innerCell}>First Name</Text>
        <Text sx={innerCell}>Date Created</Text>
        <Text sx={innerCell}>Number of Hugs</Text>
        <Text sx={innerCell}></Text>
      </Flex>
      {data
        ?.sort((a, b) => {
          const nameA = a.first_name.toLowerCase()
          const nameB = b.first_name.toLowerCase()
          if (nameA < nameB) return -1 // a comes before b
          if (nameA > nameB) return 1 // b comes before a
          return 0
        })
        .map((recipient, index) => {
          const { first_name, created_at, hugs } = recipient
          const date = new Date(created_at)
          const fullDate = date.toLocaleDateString()
          return (
            <Flex
              key={index}
              borderTop={"1px solid #cfcfcf"}
              flexWrap={"wrap"}
              justifyContent={"space-around"}
            >
              <Flex sx={innerCell}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipients/${first_name}`}
                >
                  <Text>{first_name}</Text>
                </Link>
              </Flex>
              <Flex sx={innerCell}>
                <Text>{fullDate}</Text>
              </Flex>
              <Flex sx={innerCell}>
                <Text>{hugs}</Text>
              </Flex>
              <Flex sx={innerCell}>
                <Text>Edit</Text>
              </Flex>
            </Flex>
          )
        })}
      <Link href={"/recipients/add-recipient"}>
        <Button
          color={"white"}
          mt={4}
          bgColor={buttonColor}
          _hover={{ bgColor: buttonColorHover }}
        >
          Add Recipient
        </Button>
      </Link>
    </Flex>
  )
}

export default Recipients
