"use client"
import utilityStorePersist from "@/config/storePersist"
import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { useStore } from "zustand"

const CartButtons = ({ id }) => {
  const {
    selectedProducts,
    removeProduct,
    decrementQuantity,
    incrementQuantity,
  } = useStore(utilityStorePersist)
  const handleDecrement = () => {
    const selectedProduct = selectedProducts.filter(product => product.id === id)
    if (selectedProduct[0].quantity < 2) {
      removeProduct(id)
    } else {
      decrementQuantity(id)
    }
  }
  const handleIncrement = () => {
    incrementQuantity(id)
  }
  return (
    <Flex gap={2}>
      <Text
        cursor={"pointer"}
        userSelect={"none"}
        bgColor={"red.500"}
        fontSize={"xl"}
        py={3}
        px={6}
        color={"white"}
        borderRadius={"md"}
        onClick={handleDecrement}
      >
        -
      </Text>
      <Text
        cursor={"pointer"}
        userSelect={"none"}
        bgColor={"green.500"}
        fontSize={"xl"}
        py={3}
        px={5}
        color={"white"}
        borderRadius={"md"}
        onClick={handleIncrement}
      >
        +
      </Text>
    </Flex>
  )
}

export default CartButtons
