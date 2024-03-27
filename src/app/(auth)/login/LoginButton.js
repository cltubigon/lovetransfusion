"use client"
import { buttonColor, buttonColorHover } from "@/app/globalStyle"
import { Button, Flex } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useSupabase } from "@/app/supabase-context"

const LoginButton = () => {
  const supabase = useSupabase()
  const [session, setsession] = useState(undefined)
  const initiate = async () => {
    const userSession = await supabase.auth.getSession()
    const {
      data: { session },
    } = userSession
    setsession(session)
  }
  useEffect(() => {
    initiate()
  }, [])
  return (
    <>
      {session === null && (
        <Link href={"/login"}>
          <Button
            bgColor={buttonColor}
            _hover={{ bgColor: buttonColorHover }}
            color={"white"}
            letterSpacing={"1px"}
          >
            Login
          </Button>
        </Link>
      )}
    </>
  )
}

export default LoginButton
