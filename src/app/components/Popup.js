"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { IoMdClose } from "react-icons/io"
import { useStore } from "zustand"
import utilityStore from "@/config/store"
import MultiStepForm from "../recipient/[first_name]/MultiStepForm/MultiStepForm"
import VideoPopup from "../recipient/[first_name]/VideoPopup/VideoPopup"
import { motion } from "framer-motion"

const Popup = () => {
  const { popup, setPopup } = useStore(utilityStore)
  const handleClose = () => {
    setPopup(null)
  }
  const handleBackgroundClick = (e) => {
    e.stopPropagation()
    if (!popup?.bgNotClicable) {
      setPopup(null)
    }
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  if (!popup) {
    return null
  }

  const animatePopup = {
    initial: {
      opacity: 0,
    },
    fadeIn: {
      opacity: 100,
      transition: {
        duration: 0.3,
      },
    },
  }
  return (
    <Flex
      as={motion.div}
      variants={animatePopup}
      initial={animatePopup.initial}
      animate={animatePopup.fadeIn}
      justifyContent={"center"}
      // alignItems={'center'}

      pos={"fixed"}
      top={0}
      bgColor={`rgb(0 0 0 / ${popup?.opacity || "60%"})`}
      zIndex={9999}
      h={"100vh"}
      overflowY={"scroll"}
      py={{ phs: 4, tls: 10 }}
      w={"100%"}
      onClick={handleBackgroundClick}
      px={{
        phs: 2,
        tls: 6,
        tll: 8,
        lts: 8,
      }}
    >
      <Flex
        my={"auto"}
        maxW={popup?.maxW || "1140px"}
        w={"100%"}
        bgColor={popup?.bgColor || "white"}
        h={"fit-content"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"md"}
        py={popup?.fill ? 0 : 7}
        px={popup?.fill ? 0 : 6}
        boxShadow={"md"}
        pos={"relative"}
        onClick={(e) => handleContentClick(e)}
      >
        <Flex
          pos={"absolute"}
          borderRadius={"200px"}
          top={"8px"}
          right={"8px"}
          bgColor={"unset"}
          p={"0"}
          zIndex={1}
        >
          <IoMdClose
            onClick={handleClose}
            fontSize={"24px"}
            cursor={"pointer"}
            color="#000"
          />
        </Flex>
        {popup?.content === "MultiStepForm" && <MultiStepForm />}
        {popup?.content === "VideoPopup" && <VideoPopup />}
      </Flex>
    </Flex>
  )
}

export default Popup
