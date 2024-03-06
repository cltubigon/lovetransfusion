'use client'
import { Text } from '@chakra-ui/react'
import React from 'react'

const error = ({error}) => {
  return (
    <div>
      <Text>first_name, {error.message}</Text>
    </div>
  )
}

export default error
