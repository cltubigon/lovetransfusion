import { Flex } from '@chakra-ui/react'
import React from 'react'
import { containerPadding } from '../globalStyle'

const CommentSection = () => {
  return (
   <Flex sx={containerPadding}>
    <Flex sx={containerInner}></Flex>
   </Flex>
  )
}

export default CommentSection
