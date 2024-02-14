"use client"
import utilityStore from "@/config/store"
import { Flex, Text } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useStore } from "zustand"

const TotalCosts = () => {
  const { selectedProducts, calculateTotal, totalCart } = useStore(utilityStore)
  useEffect(() => {
    console.log('calculating')
    calculateTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts])
  return (
    <Flex>
      <Text>Total: {totalCart ? totalCart : '0'}</Text>
    </Flex>
  )
}

export default TotalCosts
