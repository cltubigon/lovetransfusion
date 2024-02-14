"use client"
import { Button } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { homepageStyle } from "../../homepageStyle"
import { useStore } from "zustand"
import utilityStore from "@/config/store"

const AddToCart = ({ product }) => {
  const [isAdded, setisAdded] = useState(false)
  const { selectedProducts, addProduct } = useStore(utilityStore)
  
  useEffect(() => {
    setisAdded(selectedProducts.some((selected) => selected.id === product.id))
  }, [product, selectedProducts])

  const handleButtonClick = () => {
    addProduct(product)
  }
  return (
    <Button
      colorScheme={!isAdded && "twitter"}
      bgColor={isAdded && 'gray.400'}
      cursor={isAdded && 'not-allowed'}
      pointerEvents={isAdded && 'none'}      
      sx={homepageStyle.button}
      onClick={handleButtonClick}
    >
      {isAdded ? 'Added to cart' : 'Add to cart'}
    </Button>
  )
}

export default AddToCart