import { Flex, Input, Text } from "@chakra-ui/react"
import React from "react"
import { franklinMedium } from "../globalStyle"

const CommentForm = () => {
  return (
    <Flex>
      <Text fontFamily={franklinMedium} color={'#606060'} fontSize={'23px'} >Leave a note of encouragement:</Text>
      <Input />
    </Flex>
  )
}

export default CommentForm
