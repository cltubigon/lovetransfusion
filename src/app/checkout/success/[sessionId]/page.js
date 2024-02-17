'use client'
import { Text } from '@chakra-ui/react'
import React from 'react'

const SessionId = ({ params }) => {
    console.log({ params })
  return (
    <div>
      <Text>Session ID</Text>
    </div>
  )
}

export default SessionId
