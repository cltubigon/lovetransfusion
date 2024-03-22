import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import {
  buttonColor,
  lightBlue,
  buttonColorHover,
  containerPadding,
  containerInner,
} from "./globalStyle"
import MainNav from "./components/MainNav/MainNav"
import RecipientsPage from "./recipients/page"

const HomePage = async () => {
  return (
    <div>
      <MainNav />
      <RecipientsPage />
    </div>
  )
}

export default HomePage
