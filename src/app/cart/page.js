"use client"
import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import CartButtons from "./(components)/CartButtons"
import { useStore } from "zustand"
import utilityStore from "@/config/store"
import TotalCosts from "./(components)/TotalCosts"

const CartPage = () => {
  const { selectedProducts, removedProduct } = useStore(utilityStore)
  const sortedProducts = [...selectedProducts].sort((a, b) => a.id - b.id)
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
    </Flex>
  )
}

export default CartPage
