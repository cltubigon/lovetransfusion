'use client'
import Image from "next/image"
import React from "react"
import TestimonyImageDesktop from "./images/video-thumbnail.png"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"

const TestimonyImage = () => {
  const { setPopup } = useStore(utilityStore)

  const handleClick = () => {
    setPopup({
      content: "VideoPopup",
      fill: true,
      maxW: "982px",
    })
  }
  return (
    <Image
      src={TestimonyImageDesktop}
      alt="testimony"
      quality={100}
      onClick={handleClick}
    />
  )
}

export default TestimonyImage
