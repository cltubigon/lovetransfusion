import { Text } from "@chakra-ui/react"
import React from "react"

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Text bgColor={'yellow.100'}>Custom Auth Header</Text>
      {children}
    </div>
  )
}

export default AuthLayout
