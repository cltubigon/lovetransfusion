import { Heading, Text } from "@chakra-ui/react"
import React from "react"

const retrieveContact = async () => {
  const res = await fetch("http://localhost:3000/active-campaign/api")
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return await res.json()
}

const ActiveCampaign = async () => {
  const contact = await retrieveContact()
  console.log("contact", contact)
  return (
    <>
      <Heading>{contact.data.contactLists[0].first_name}</Heading>
      {/* <Text>Active Campaign</Text> */}
    </>
  )
}

export default ActiveCampaign
