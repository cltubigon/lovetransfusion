"use client"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import {
  buttonColor,
  buttonColorHover,
  containerPadding,
  lightBlue,
} from "../globalStyle"
import multipleUseQuery from "@/hooks/useQuery/multipleUseQuery"
import { useQuery } from "@tanstack/react-query"
import { createClient } from "@/config/supabase/supabaseClient"
import imgPlaceholder from "./[first_name]/images/profile-pic-placeholder2.png"
import { Image, Link } from "@chakra-ui/next-js"

export const revalidate = 5

const RecipientsClientComponent = () => {
  const supabase = createClient()
  const { data: recipients, error } = useQuery(
    multipleUseQuery({
      supabase,
      queryKey: ["recipients"],
      table: "recipients",
      select: "first_name, profile_picture",
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
        maxW={"1156px"}
        w={"100%"}
        flexWrap={{
          phs: "wrap",
          tll: "nowrap",
        }}
        alignItems={"flex-start"}
        gap={4}
        flexDir={"column"}
      >
        <Flex
          flexDir={{ phs: "column", tls: "row" }}
          alignItems={{ phs: "flex-start", tls: "center" }}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Flex py={6} flexDir={"column"} gap={1} px={{ phs: 0, tls: 2 }}>
            <Heading color={lightBlue}>List of Recipients</Heading>
            <Text>v0.0.14 - Image upload feature</Text>
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          flexWrap={"wrap"}
          rowGap={{ phs: 6, tll: 8 }}
          // columnGap={{ phs: 6, tls: 2, lts: 4 }}
          justifyContent={"flex-start"}
        >
          {recipients
            ?.sort((a, b) => {
              const nameA = a.first_name.toLowerCase()
              const nameB = b.first_name.toLowerCase()
              if (nameA < nameB) return -1 // a comes before b
              if (nameA > nameB) return 1 // b comes before a
              return 0
            })
            .map((recipient, index) => {
              const { first_name, profile_picture } = recipient
              return (
                <Link
                  key={index}
                  href={`recipients/${first_name}`}
                  cursor={"pointer"}
                  w={{
                    phs: "100%",
                    tls: "calc(33.3% - 16px)",
                    lts: "calc(25% - 16px)",
                  }}
                  _hover={{ textDecor: "none" }}
                  flexDir={"column"}
                  borderRadius={"md"}
                  overflow={"hidden"}
                  bgColor={"gray.50"}
                  boxShadow={"sm"}
                  mx={{ phs: 10, phl: "60px", tls: 2 }}
                >
                  <Flex w={"100%"} h={"250px"} pos={"relative"}>
                    <Image
                      src={
                        profile_picture
                          ? `${profile_picture?.url}`
                          : imgPlaceholder
                      }
                      alt="profile picture"
                      width={390}
                      height={250}
                      quality={100}
                      w={{ phs: 336, phl: 390, tls: 297, ltl: 273 }}
                      h={{ phs: 250 }}
                      backgroundPosition={"cover"}
                    />
                  </Flex>
                  <Flex py={4} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={"18px"}>{first_name}</Text>
                  </Flex>
                </Link>
              )
              key = { index }
            })}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default RecipientsClientComponent
