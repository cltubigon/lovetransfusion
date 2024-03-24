"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { franklinMedium, lightBlue } from "../../globalStyle"
import returnIcon from "./images/return-icon.svg"
import fbShare from "./images/fb-share-proper.png"
import linkedinShare from "./images/linkedin-share.png"
import twitterShare from "./images/twitter-share-proper.png"
import pinterestShare from "./images/pinterest-share-proper.png"
import { motion } from "framer-motion"
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share"
import packageImageTemplate from "./MultiStepForm/images/placeholder-image.png"

const ShareModal = ({
  parameters: { buttonStyle, firstName, package_image, sub_title },
}) => {
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

  const handleClick = () => {
    setisModalActive(() => !isModalActive)
  }
  const handleShareModalClick = (e) => {
    e.stopPropagation()
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

  const packageImage = package_image
    ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${package_image?.fullPath}`
    : packageImageTemplate
    
  return (
    <Flex
      sx={buttonStyle}
      position={"relative"}
      onClick={(e) => handleClick(e)}
      onMouseOver={handlebuttonHover}
      onMouseLeave={(e) => handleMouseLeave({ e, data: "button" })}
    >
      <Flex alignItems={"center"} gap={"13px"}>
        <Text fontSize={"22px"} fontFamily={franklinMedium}>
          Share page
        </Text>
        <Image src={returnIcon} alt="care icon" quality={100} />
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
          cursor={"default"}
          justifyContent={"center"}
          onMouseOver={handleModalHover}
          onMouseLeave={(e) => handleMouseLeave({ e, data: "modal" })}
          onClick={handleShareModalClick}
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
              {/* **************FacebookShareButton ************** */}
              <FacebookShareButton
                hashtag="#testing"
                url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipient/${firstName}`}
              >
                <Box
                  cursor={"pointer"}
                  as={motion.div}
                  variants={item}
                  sx={iconsStyle}
                >
                  <Image
                    src={fbShare}
                    alt={"facebook share icon"}
                    width={40}
                    quality={100}
                  />
                </Box>
              </FacebookShareButton>
              {/* **************TwitterShareButton ************** */}
              <TwitterShareButton
                title={sub_title}
                url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipient/${firstName}`}
              >
                <Box
                  cursor={"pointer"}
                  as={motion.div}
                  variants={item}
                  sx={iconsStyle}
                >
                  <Image
                    src={twitterShare}
                    alt={"twitter share icon"}
                    width={40}
                    quality={100}
                  />
                </Box>
              </TwitterShareButton>
              {/* ************** PinterestShareButton ************** */}
              <PinterestShareButton
                media={packageImage}
                url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipient/${firstName}`}
              >
                <Box
                  cursor={"pointer"}
                  as={motion.div}
                  variants={item}
                  sx={iconsStyle}
                >
                  <Image
                    src={pinterestShare}
                    alt={"pinterest share icon"}
                    width={40}
                    quality={100}
                  />
                </Box>
              </PinterestShareButton>
              {/* ************** LinkedinShareButton ************** */}
              <LinkedinShareButton
                hashtag="#testing"
                title={sub_title}
                url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipient/${firstName}`}
              >
                <Box
                  cursor={"pointer"}
                  as={motion.div}
                  variants={item}
                  sx={iconsStyle}
                >
                  <Image
                    src={linkedinShare}
                    alt={"Linkedin share icon"}
                    width={40}
                    quality={100}
                  />
                </Box>
              </LinkedinShareButton>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default ShareModal
