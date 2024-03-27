"use client"
import { buttonColor, buttonColorHover } from "@/app/globalStyle"
import { Button, Flex, Skeleton } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { logout } from "@/app/(auth)/signOut/actions"
import { useSupabase } from "@/app/supabase-context"

const LogoutButton = () => {
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
      {session && (
        <form>
          <Button
            bgColor={buttonColor}
            _hover={{ bgColor: buttonColorHover }}
            color={"white"}
            type="submit"
            formAction={logout}
          >
            Logout
          </Button>
        </form>
      )}
      {session === undefined && (
        <form>
          <Skeleton h={"40px"} w={"73px"} borderRadius={"lg"} />
        </form>
      )}
    </>
  )
}

export default LogoutButton
