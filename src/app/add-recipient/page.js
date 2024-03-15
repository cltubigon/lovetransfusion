import { Flex, Input } from "@chakra-ui/react"
import React from "react"
import { containerInner, containerPadding } from "../globalStyle"

const AddRecipient = () => {
  return (
    <Flex sx={containerPadding}>
      <Flex sx={containerInner}>
        <Input placeholder="asdf" />
      </Flex>
    </Flex>
  )
}

export default AddRecipient
