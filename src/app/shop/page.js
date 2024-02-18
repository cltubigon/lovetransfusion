import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import AddToCart from "../cart/(add-to-cart)/AddToCart"
import { products } from "../products"
import { homepageStyle } from "../homepageStyle"
const ShopPage = () => {
  return (
    <Flex sx={homepageStyle.mainContainer}>
      {products.map((product, index) => {
        return (
          <Flex key={index} flexDirection={"column"} alignItems={"center"}>
            <Flex sx={homepageStyle.titleContainer}>
              <Heading sx={homepageStyle.heading}>
                {product.productName}
              </Heading>
              <Text sx={homepageStyle.price}>${product.price}</Text>
            </Flex>
            <AddToCart product={product} />
          </Flex>
        )
      })}
    </Flex>
  )
}

export default ShopPage
