import { Text } from "@chakra-ui/react"
import React from "react"

const ProductsLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Text bgColor={"gray.200"}>Featured Products</Text>
    </div>
  )
}

export default ProductsLayout
