"use client"
import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { IoMdClose } from "react-icons/io"
import { useStore } from "zustand"
import utilityStore from "@/config/store"
import MultiStepForm from "../recipient/[first_name]/MultiStepForm/MultiStepForm"
import MultiTwo from "../recipient/[first_name]/MultiStepForm/MultiTwo"
import VideoPopup from "../recipient/[first_name]/VideoPopup/VideoPopup"

const Popup = () => {
  const { popup, setPopup } = useStore(utilityStore)
  const handleClose = () => {
    setPopup(null)
  }
  const handleBackgroundClick = (e) => {
    e.stopPropagation()
    setPopup(null)
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  if (!popup) {
    return null
  }
  return (
    <Flex pos={"absolute"} zIndex={9999}>
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
        bgColor={`rgb(0 0 0 / ${popup?.opacity || "60%"})`}
        pos={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={99999}
        onClick={(e) => handleBackgroundClick(e)}
        flexDir={"column"}
      >
        <Flex
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
          {popup?.content === "MultiTwo" && <MultiTwo />}
          {popup?.content === "VideoPopup" && <VideoPopup />}
          {!popup?.content && "No data to show"}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Popup
