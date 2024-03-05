import { Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const ContactPage = () => {
  return (
    <>
      <Link href={`/`} shallow>
        <Text fontSize={"32px"}>Home</Text>
      </Link>
    </>
  )
}

export default ContactPage
