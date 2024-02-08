import { Text } from "@chakra-ui/react"
import React from "react"

const ProductNameLayout = ({ children, params }) => {
    console.log('paramsss', params)
  return <div>
    <Text bgColor={'orange.100'} >Product {params.productName} custom header</Text>
    {children}</div>
}

export default ProductNameLayout