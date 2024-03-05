"use client"
import React, { useEffect, useState } from "react"
import { supabase } from "@/config/supabase"
import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

const Recipients = () => {
  const [recipients, setrecipients] = useState(null)
  useEffect(() => {
    const getRecipient = async () => {
      let { data: recipients, error } = await supabase
        .from("recipients")
        .select("*")
      if (recipients) {
        return setrecipients(recipients)
      }
      if (error) console.log({ error })
    }
    getRecipient()
  }, [])

  useEffect(() => {
    console.log("recipients", recipients)
  }, [recipients])
  return (
    <div>
      <Flex flexDir={"column"} justifyContent={"center"}>
        <Heading>List of Recipients </Heading>
        <Text>{"(Click a recipient below to view) v0.0.2"}</Text>
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
      <Link href={`/contact`} shallow>
        <Text fontSize={"32px"}>contact</Text>
      </Link>
    </div>
  )
}

export default Recipients
