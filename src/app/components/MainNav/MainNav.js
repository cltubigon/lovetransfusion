import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
  franklinMedium,
} from "@/app/globalStyle"
import { Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import logo from "./image/main-logo.png"
import Link from "next/link"
import { isAuthenticated } from "@/config/supabase/isAuthenticated"
import { logout } from "@/app/privates/actions"
import { createClient } from "@/config/supabase/supabaseServer"
import { GiHamburgerMenu } from "react-icons/gi"
import ClientMainNav from "./ClientMainNav"

const MainNav = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const menu = [
    { name: "Home" },
    { name: "About" },
    { name: "Testimonials" },
    { name: "Visit" },
    { name: "Contact" },
    { name: "Donate" },
  ]
  return (
    <Flex
      sx={containerPadding}
      boxShadow={"sm"}
      py={"15px"}
      pos={"relative"}
      zIndex={997}
    >
      <Flex sx={containerInner} justifyContent={"space-between"}>
        <ClientMainNav parameters={{ menu, data }} />
        <Flex
          gap={{ tll: 4, lts: 6, ltl: 8 }}
          display={{ phs: "none", tll: "flex" }}
          alignItems={"center"}
          flexWrap={{ phs: "wrap", tll: "nowrap" }}
        >
          {menu.map((item, index) => {
            return (
              <Text fontSize={"20px"} fontFamily={franklinMedium} key={index}>
                {item.name}
              </Text>
            )
          })}
          {!data?.user && (
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
          {data?.user && (
            <form>
              <Button
                bgColor={buttonColor}
                _hover={{ bgColor: buttonColorHover }}
                color={"white"}
                letterSpacing={"1px"}
                type="submit"
                formAction={logout}
              >
                Logout
              </Button>
            </form>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MainNav
