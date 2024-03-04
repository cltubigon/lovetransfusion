"use client"
import { Flex } from "@chakra-ui/react"
import React from "react"
import { IoMdClose } from "react-icons/io"
import { useStore } from "zustand"
import utilityStore from "@/config/store"

const Popup = ({ children, parameters }) => {
  const { setPopup } = useStore(utilityStore)
  const handleClose = () => {
    setPopup()
  }
  const handleBackgroundClick = (e) => {
    e.stopPropagation()
    setPopup()
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <Flex pos={'absolute'} zIndex={9999} >

    <Flex
      justifyContent="center"
      px={{
        phs: 1,
        tls: 6,
        tll: 8,
        lts: 8,
      }}
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      bgColor={`rgb(0 0 0 / ${parameters?.opacity || "60%"})`}
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={99999}
      onClick={(e) => handleBackgroundClick(e)}
      flexDir={"column"}
    >
      <Flex
        maxW={parameters?.maxWidth || "1140px"}
        w={"100%"}
        bgColor={"white"}
        h={"fit-content"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"md"}
        py={7}
        px={6}
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
        >
          <IoMdClose
            onClick={handleClose}
            fontSize={"24px"}
            cursor={"pointer"}
            color="#000"
          />
        </Flex>
        {children}
      </Flex>
    </Flex>
    </Flex>
  )
}

export default Popup
