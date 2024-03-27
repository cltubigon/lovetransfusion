import { containerInner, containerPadding } from "@/app/globalStyle"
import { Flex } from "@chakra-ui/react"
import React from "react"
// import { isAuthenticated } from "@/config/supabase/isAuthenticated"
import ClientMainNav from "./ClientMobileNav"
import ClientDesktopNav from "./ClientDesktopNav"

const MainNav = async () => {
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
        <ClientMainNav menu={menu} />
        <ClientDesktopNav menu={menu} />
      </Flex>
    </Flex>
  )
}

export default MainNav
