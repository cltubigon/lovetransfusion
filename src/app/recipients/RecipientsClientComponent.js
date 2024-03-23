"use client"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
  lightBlue,
} from "../globalStyle"
import Link from "next/link"
import multipleUseQuery from "@/hooks/useQuery/multipleUseQuery"
import { useQuery } from "@tanstack/react-query"
import { createClient } from "@/config/supabase/supabaseClient"
import Image from "next/image"
import imgPlaceholder from "./[first_name]/images/profile-pic-placeholder2.png"
import { useRouter } from "next/navigation"

export const revalidate = 5

const RecipientsClientComponent = ({ data }) => {
  const supabase = createClient()
  const router = useRouter()
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

  const handleClick = ({ e, first_name }) => {
    e.preventDefault()
    router.push(`/recipients/${first_name}`)
  }
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
        <Flex justifyContent={"space-between"} w={"100%"} alignItems={"center"}>
          <Flex py={6} flexDir={"column"} gap={1} px={{ phs: 0, tls: 2 }}>
            <Heading color={lightBlue}>List of Recipients</Heading>
            <Text>v0.0.13 - Added Cloudinary</Text>
          </Flex>
          {data?.user && (
            <Link href={"/recipients/add-recipient"}>
              <Button
                bgColor={buttonColor}
                _hover={{ bgColor: buttonColorHover }}
                color={"white"}
                letterSpacing={"1px"}
              >
                Add New Recipient
              </Button>
            </Link>
          )}
        </Flex>
        <Flex
          w={"100%"}
          flexWrap={"wrap"}
          rowGap={{ phs: 6, tll: 8 }}
          // columnGap={{ phs: 6, tls: 2, lts: 4 }}
          justifyContent={"flex-start"}
        >
          {recipients?.map((recipient, index) => {
            const { first_name, profile_picture } = recipient
            const picture = profile_picture
              ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${profile_picture?.fullPath}`
              : imgPlaceholder
            return (
              <Flex
                key={index}
                cursor={"pointer"}
                onClick={(e) => handleClick({ first_name, e })}
                mx={{ phs: 0, tls: 2 }}
                w={{
                  phs: "100%",
                  tls: "calc(33.3% - 16px)",
                  lts: "calc(25% - 16px)",
                }}
                flexDir={"column"}
                borderRadius={"md"}
                overflow={"hidden"}
                bgColor={"gray.50"}
                boxShadow={"sm"}
              >
                <Flex w={"100%"} h={"250px"} pos={"relative"}>
                  <Image
                    src={picture}
                    alt="profile picture"
                    blurDataURL={profile_picture?.plaiceholders || ""}
                    placeholder="blur"
                    // fill
                    width={273}
                    height={250}
                    quality={100}
                    style={{ backgroundPosition: "cover", objectFit: "cover" }}
                  />
                </Flex>
                <Flex py={4} alignItems={"center"} justifyContent={"center"}>
                  <Text fontSize={"18px"}>{first_name}</Text>
                </Flex>
              </Flex>
            )
            key = { index }
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default RecipientsClientComponent

// {
//   recipients?.map((recipient, index) => {
//     const { first_name } = recipient
//     return (
//       <Link key={index} href={`/recipients/${first_name}`} shallow>
//         <Flex flexDir={"column"} w={"33.3%"} bgColor={"red"}>
//           <Flex
//             minH={"150px"}
//             bgColor={"green.200"}
//             borderRadius={"4px 4px 0 0"}
//           >
//             {/* <Image src={""} alt={"recipient image"} /> */}
//           </Flex>
//           <Text>Recipient Name</Text>
//         </Flex>
//       </Link>
//     )
//   })
// }
