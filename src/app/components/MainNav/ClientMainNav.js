"use client"
import {
  buttonColor,
  buttonColorHover,
  franklinMedium,
} from "@/app/globalStyle"
import { Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import React, { useState } from "react"
import logo from "./image/main-logo.png"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { easeInOut, motion } from "framer-motion"
import { logout } from "@/app/auth/signOut/actions"

const ClientMainNav = ({ parameters: { menu, data } }) => {
  const [isOpen, setisOpen] = useState(false)
  const handleOpen = () => {
    setisOpen(true)
  }
  const handleClose = () => {
    const timeout = setTimeout(() => {
      setisOpen(false)
    }, 400)
    return () => {
      clearTimeout(timeout)
    }
  }

  const slideRight = {
    initial: {
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
    slide: {
      x: "0",
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  }
  return (
    <div>
      {/* {isOpen && ( */}
      <Flex
        w={"100%"}
        h={"100vh"}
        pos={"fixed"}
        zIndex={998}
        display={!isOpen ? "none" : "flex"}
        transition={"display 1s"}
        bgColor={"rgba(0,0,0,0.36)"}
        left={0}
        top={0}
      />
      <Flex
        //   display={{ phs: "flex", tll: "none" }}
        pos={"fixed"}
        top={0}
        w={"100%"}
        zIndex={999}
        h={"100vh"}
        opacity={!isOpen && 0}
        transition={"opacity 0.3s"}
        left={0}
        flexWrap={"nowrap"}
        //   bgColor={"rgba(0,0,0,0.26)"}
        as={motion.div}
        variants={slideRight}
        // initial={"initial"}
        animate={isOpen ? "slide" : "initial"}
      >
        <Flex
          gap={4}
          pl={8}
          pt={10}
          w={"300px"}
          boxShadow={"md"}
          bgColor={"white"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          {menu.map((item, index) => {
            return (
              <Text fontSize={"20px"} fontFamily={franklinMedium} key={index}>
                {item.name}
              </Text>
            )
          })}
          {!data?.user && (
            <Link href={"/login"}>
              <Button
                bgColor={buttonColor}
                _hover={{ bgColor: buttonColorHover }}
                color={"white"}
                letterSpacing={"1px"}
              >
                Login
              </Button>
            </Link>
          )}
          {data?.user && (
            <form>
              <Button
                bgColor={buttonColor}
                _hover={{ bgColor: buttonColorHover }}
                color={"white"}
                letterSpacing={"1px"}
                type="submit"
                formAction={logout}
              >
                Logout Client
              </Button>
            </form>
          )}
        </Flex>
        <Flex w={"30%"} onClick={handleClose}></Flex>
      </Flex>
      {/* )} */}
      <Flex gap={6} alignItems={"center"}>
        <Flex
          cursor={"pointer"}
          display={{ phs: "flex", tll: "none" }}
          onClick={handleOpen}
        >
          <GiHamburgerMenu fontSize={"32px"} />
        </Flex>
        <Link href={"/"}>
          <Flex pr={{ tll: 16 }}>
            <Image
              priority={true}
              src={logo}
              alt="main-love-transfusion-logo"
              quality={100}
            />
          </Flex>
        </Link>
      </Flex>
    </div>
  )
}

export default ClientMainNav
