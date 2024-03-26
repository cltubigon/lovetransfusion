import { Flex } from "@chakra-ui/react"
import React from "react"
import { containerInner, containerPadding } from "../globalStyle"
import MainNav from "../components/MainNav/MainNav"
import DashboardNavigation from "./DashboardNavigation"

const Dashboard = async ({ children }) => {
  return (
    <div>
      <MainNav />
      <Flex sx={containerPadding} mt={10}>
        <Flex sx={containerInner} flexDir={"column"}>
          <Flex w={"100%"} flexDir={{ phs: "column", tll: "row" }}>
            <DashboardNavigation />
            <Flex
              px={{ phs: 0, tll: 10 }}
              w={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
            >
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Dashboard
