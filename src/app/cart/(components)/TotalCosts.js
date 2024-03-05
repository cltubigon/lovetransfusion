"use client"
import utilityStorePersist from "@/config/storePersist"
import { Flex, Heading } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useStore } from "zustand"

const TotalCosts = () => {
  const { selectedProducts, calculateTotal, totalCart } = useStore(utilityStorePersist)
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
