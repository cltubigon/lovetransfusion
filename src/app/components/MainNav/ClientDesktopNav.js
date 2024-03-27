"use client"
import { franklinMedium } from "@/app/globalStyle"
import { Flex, Text } from "@chakra-ui/react"
import LogoutButton from "@/app/(auth)/signOut/LogoutButton"
import LoginButton from "@/app/(auth)/login/LoginButton"

const ClientDesktopNav = ({ menu }) => {
  return (
    <Flex
      gap={{ tll: 4, lts: 6, ltl: 8 }}
      display={{ phs: "none", tll: "flex" }}
      alignItems={"center"}
      flexWrap={{ phs: "wrap", tll: "nowrap" }}
    >
      {menu.map((item, index) => {
        return (
          <Text fontSize={"20px"} fontFamily={franklinMedium} key={index}  >
            {item.name}
          </Text>
        )
      })}
      <LoginButton />
      <LogoutButton />
    </Flex>
  )
}

export default ClientDesktopNav
