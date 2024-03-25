"use client"
import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { RxDashboard } from "react-icons/rx"
import { BsPersonRolodex } from "react-icons/bs"
import { BsPersonFillGear } from "react-icons/bs"
import { usePathname } from "next/navigation"

const DashboardNavigation = () => {
  const pathname = usePathname()
  const navigation = {
    px: 6,
    py: 4,
    cursor: "default",
    borderRadius: "lg",
    _hover: {
      bgColor: "#f5f5f5",
    },
  }
  const mobileMenu = {
    px: 2,
    py: 2,
    cursor: "default",
    color: "#000",
    borderRadius: "lg",
    _hover: {
      bgColor: "#f5f5f5",
    },
  }
  return (
    <Flex>
      <Flex display={{ phs: "flex", tll: "none" }} gap={4}>
        <Flex sx={mobileMenu}>
          <RxDashboard fontSize={"32px"} />
        </Flex>
        <Flex sx={mobileMenu} bgColor={pathname.includes("recipients") ? "#f5f5f5" : "#fff"}>
          <BsPersonRolodex fontSize={"32px"} />
        </Flex>
        <Flex sx={mobileMenu}>
          <BsPersonFillGear fontSize={"32px"} />
        </Flex>
      </Flex>
      <Flex
        flexDir={"column"}
        px={4}
        borderRight={"1px solid #ccc"}
        w={"250px"}
        display={{ phs: "none", tll: "flex" }}
      >
        <Flex sx={navigation}>
          <Text>Dashboard</Text>
        </Flex>
        <Flex sx={navigation} bgColor={pathname.includes("recipients") ? "#f5f5f5" : "#fff"}>
          <Text>Recipients</Text>
        </Flex>
        <Flex sx={navigation}>
          <Text>Admin Users</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardNavigation
