import { Flex, Heading } from "@chakra-ui/react"
import { notFound } from "next/navigation"
import React from "react"

const productId = ({ params }) => {
  console.log({ params })
  if (params.productId > 5) {
    notFound()
  } else {
    return (
      <Flex>
        <Heading>Product {params.productId} Details</Heading>
      </Flex>
    )
  }
}

export default productId
