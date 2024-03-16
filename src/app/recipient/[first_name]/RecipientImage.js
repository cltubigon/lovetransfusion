import { Flex } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import { lightBlue } from "../../globalStyle"
import profilePic from "./images/profile-pic-placeholder2.png"
import heart from "./images/heart-proper.png"

const RecipientImage = ({
  maxW,
  minW,
  logoW,
  logoH,
  borderW,
  outlineW,
  outlineOffset,
  bottom,
  right,
}) => {
  return (
    <Flex
    zIndex={1}
      alignItems={"center"}
      position={"relative"}
      mx={'auto'}
      maxW={maxW || "250px"}
      minW={minW || "250px"}
      maxH={maxW || "260px"}
      minH={minW || "260px"}
    >
      <Image
        src={profilePic}
        placeholder="blur"
        alt="Picture of the recipient"
        // width={250}
        // height={260}
        loading="eager"
        fill
        style={{
          borderRadius: "200px",
          border: `${borderW || "7px"} solid ${lightBlue}`,
          outline: `${outlineW || "5px"} solid #fff`,
          outlineOffset: outlineOffset || "-12px",
          boxShadow: "0px 0px 23px 0px rgba(49, 144, 221, 0.53)",
        }}
      />
      <Flex pos={"absolute"} bottom={bottom || "-14px"} right={right || "-10px"}>
        <Image
          src={heart}
          loading="eager"
          alt="love transfusion"
          style={{ width: logoW || 107, height: logoH || 108 }}
        />
      </Flex>
    </Flex>
  )
}

export default RecipientImage
