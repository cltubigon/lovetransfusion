"use client"
import { Flex, Img } from "@chakra-ui/react"

const ZustandLoader = () => {
  return (
    <>
      <Flex
        position={"fixed"}
        w={"100%"}
        h={"100vh"}
        top={0}
        bgColor={"rgba(255, 255, 255, 0.5)"}
        zIndex={999}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Img src="/images/utilities/spinner.svg" w={14} h={14} />
      </Flex>
    </>
  )
}

export default ZustandLoader
