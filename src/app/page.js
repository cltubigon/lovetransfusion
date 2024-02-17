import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { homepageStyle } from "./homepageStyle"
import { products } from "./products"
import AddToCart from "./cart/(add-to-cart)/AddToCart"
import CartPage from "./cart/page"
import ShopPage from "./shop/page"
import CheckoutPage from "./checkout/page"

export default function Home() {
  return (
    <Box>
      <ShopPage />
      <CartPage />
      <CheckoutPage />
    </Box>
  )
}
