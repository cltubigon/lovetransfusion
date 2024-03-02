import { Flex } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {
  containerInner,
  containerPadding,
} from "../globalStyle"
import wristBand from "./images/wrist-band.png"

const WristHugSection = () => {
  return (
    <Flex py={"18px"} bgColor={"#E0F3FF"}>
      <Flex
        sx={containerPadding}
        w={"100%"}
        pt={"29px"}
        pb={"25px"}
        borderBottom={"2px solid white"}
        borderTop={"2px solid white"}
      >
        <Flex
          sx={containerInner}
          pl={{phs: '0', tls: "37px"}}
          pr={{phs: '0', tls: "44px"}}
          justifyContent={"center"}
        >
          <Flex maxW={'697px'}>
            <Image src={wristBand} alt="wrist band" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default WristHugSection
