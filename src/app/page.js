import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { homepageStyle } from "./homepageStyle"
import { products } from "./products"
import AddToCart from "./cart/(add-to-cart)/AddToCart"
import CartPage from "./cart/page"

export default function Home() {
  return (
    <Box>
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
      <CartPage />
    </Box>
  )
}
