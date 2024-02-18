import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { homepageStyle } from "./homepageStyle"
import { products } from "./products"
import AddToCart from "./cart/(add-to-cart)/AddToCart"
import CartPage from "./cart/page"
import ShopPage from "./shop/page"
import CheckoutPage from "./checkout/page"
import CreateAccount from "./stripe/account/create/page"
import CreatePaymentIntent from "./stripe/payment-intents/create/page"
import DeleteAccount from "./stripe/account/delete/page"
import RetrieveAccount from "./stripe/account/retrieve/page"
import UpdatePaymentIntent from "./stripe/payment-intents/update/page"
import ListAllPaymentIntents from "./stripe/payment-intents/list-all/page"

export default function Home() {
  return (
    <Box px={4}>
      {/* <ShopPage />
      <CartPage />
      <CheckoutPage /> */}
      <CreateAccount />
      <RetrieveAccount />
      <DeleteAccount />
      <CreatePaymentIntent />
      <UpdatePaymentIntent />
      <ListAllPaymentIntents />
    </Box>
  )
}
