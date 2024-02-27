"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import LogoSection from "./LogoSection"
import { franklinMedium, lightBlue } from "../globalStyle"
import returnIcon from "./images/return-icon.svg"
import fbShare from "./images/fb-share.png"
import emailShare from "./images/email-share.png"
import twitterShare from "./images/twitter-share.png"
import pinterestShare from "./images/pinterest-share.png"
import { motion } from "framer-motion"

const ShareModal = ({ buttonStyle }) => {
  const [isModalActive, setisModalActive] = useState(false)
  const [buttonHovered, setbuttonHovered] = useState(false)
  const [modalHovered, setmodalHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!modalHovered && !buttonHovered) {
        setisModalActive(false)
      }
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [buttonHovered, modalHovered])

  const handleMouseLeave = ({ e, data }) => {
    e.stopPropagation()

    if (data === "button") setbuttonHovered(false)
    if (data === "modal") setmodalHovered(false)
  }

  const handlebuttonHover = (e) => {
    e.stopPropagation()
    setbuttonHovered(true)
    const timer = setTimeout(() => {
      setisModalActive(true)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }
  const handleModalHover = (e) => {
    e.stopPropagation()
    setmodalHovered(true)
    const timer = setTimeout(() => {
      setisModalActive(true)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const iconsStyle = {
    boxShadow: "2px 2px 2px 0px rgba(47, 142, 221, 0.32)",
    borderRadius: "9px",
  }

  const icons = [
    { image: fbShare, alt: "facebook share icon" },
    { image: twitterShare, alt: "twitter share icon" },
    { image: pinterestShare, alt: "pinterest share icon" },
    { image: emailShare, alt: "email share icon" },
  ]

  return (
    <Flex
      sx={buttonStyle}
      position={"relative"}
      onMouseOver={handlebuttonHover}
      onMouseLeave={(e) => handleMouseLeave({ e, data: "button" })}
    >
      <Flex alignItems={"center"} gap={"13px"}>
        <Text fontSize={"22px"} fontFamily={franklinMedium}>
          Share page
        </Text>
        <Image src={returnIcon} alt="care icon" />
      </Flex>
      {isModalActive && (
        <Flex
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
          pos={"absolute"}
          bottom={"63px"}
          left={"-30px"}
          bgColor={"white"}
          boxShadow={"3px 3px 3px 0px rgba(47, 142, 221, 0.32)"}
          border={`4px solid ${lightBlue}`}
          borderRadius={"13px"}
          minW={"312px"}
          pt={"3px"}
          pb={"15px"}
          justifyContent={"center"}
          onMouseOver={handleModalHover}
          onMouseLeave={(e) => handleMouseLeave({ e, data: "modal" })}
        >
          <Flex
            gap={"3px"}
            flexDir={"column"}
            position={"relative"}
            alignItems={"center"}
            _after={{
              content: "''",
              pos: "absolute",
              bottom: "-28px",
              left: "55px",
              right: "0px",
              w: "17px",
              h: "17px",
              borderRight: `4px solid ${lightBlue}`,
              borderBottom: `4px solid ${lightBlue}`,
              bgColor: "white",
              transform: "rotate(45deg)",
              zIndex: 1,
            }}
          >
            <Text
              fontSize={"24px"}
              fontFamily={franklinMedium}
              color={lightBlue}
            >
              Please Share With Your Friends
            </Text>
            <Flex gap={"16px"}>
              {icons.map((icon, index) => {
                return (
                  <Box
                    as={motion.div}
                    variants={item}
                    key={index}
                    sx={iconsStyle}
                  >
                    <Image src={icon.image} alt={icon.alt} width={40} />
                  </Box>
                )
              })}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default ShareModal
