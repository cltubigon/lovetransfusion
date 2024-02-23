"use client"
import utilityStore from "@/config/store"
import { Flex, Heading } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useStore } from "zustand"

const TotalCosts = () => {
  const { selectedProducts, calculateTotal, totalCart } = useStore(utilityStore)
  useEffect(() => {
    calculateTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts])
  return (
    <Flex>
      <Heading fontSize={'xx-large'}>Total: {totalCart ? totalCart : "0"}</Heading>
    </Flex>
  )
}

export default TotalCosts
