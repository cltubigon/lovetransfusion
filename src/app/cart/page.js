"use client"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import CartButtons from "./(components)/CartButtons"
import { useStore } from "zustand"
import TotalCosts from "./(components)/TotalCosts"
import { useRouter } from "next/navigation"
import CheckoutWithStripeSessions from "../(checkout)/checkout-stripe-session/page"
import utilityStorePersist from "@/utilities/store/storePersist"

const CartPage = () => {
  const router = useRouter()
  const { selectedProducts } = useStore(utilityStorePersist)
  const sortedProducts = [...selectedProducts].sort((a, b) => a.id - b.id)
  const checkoutEmbedded = () => {
    router.push("/checkout-embedded")
  }
  const checkoutCustomFlow = () => {
    router.push("/checkout-custom-flow")
  }
  return (
    <Flex p={10} gap={4} flexDir={"column"}>
      <Heading textAlign={"center"} mb={10}>
        Your Cart
      </Heading>
      {sortedProducts?.map(({ id, productName, price, quantity }, index) => {
        return (
          <Flex key={index} justifyContent={"space-between"}>
            <Flex flexDirection={"column"}>
              <Text fontSize={"xl"}>{productName}</Text>
              <Text>
                {price} x {quantity}
              </Text>
            </Flex>
            <CartButtons id={id} />
          </Flex>
        )
      })}
      <TotalCosts />
      <Flex gap={4} flexWrap={'wrap'} >
        <CheckoutWithStripeSessions />
        <Button
          flexBasis={"100%"}
          colorScheme={"green"}
          onClick={checkoutEmbedded}
        >
          Checkout Embedded
        </Button>
        <Button
          flexBasis={"100%"}
          colorScheme={"twitter"}
          onClick={checkoutCustomFlow}
        >
          Checkout with Custom Flow
        </Button>
      </Flex>
    </Flex>
  )
}

export default CartPage
