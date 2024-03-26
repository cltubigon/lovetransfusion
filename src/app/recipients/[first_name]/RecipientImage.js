import { Flex } from "@chakra-ui/react"
import { lightBlue } from "../../globalStyle"
import profilePicLocal from "./images/profile-pic-placeholder2.png"
import heart from "./images/heart-proper.png"
import { Image } from "@chakra-ui/next-js"

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
  profile_picture,
  imgW,
  imgH,
}) => {
  console.log({ logoW, logoH })
  return (
    <Flex
      position={"relative"}
      maxW={maxW || "250px"}
      minW={minW || "250px"}
      maxH={maxW || "255px"}
      minH={minW || "255px"}
    >
      <Flex
        maxW={maxW || "250px"}
        minW={minW || "250px"}
        maxH={maxW || "255px"}
        minH={minW || "255px"}
        zIndex={1}
        alignItems={"center"}
        mx={"auto"}
        borderRadius={"200px"}
        border={`${borderW || "7px"} solid ${lightBlue}`}
        outline={`${outlineW || "5px"} solid #fff`}
        outlineOffset={outlineOffset || "-12px"}
        boxShadow={"0px 0px 23px 0px rgba(49, 144, 221, 0.53)"}
        overflow={"hidden"}
        justifyContent={"center"}
      >
        <Image
          src={profile_picture ? `${profile_picture?.url}` : profilePicLocal}
          quality={100}
          width={imgW || 226}
          height={imgH || 231}
          alt="Picture of the recipient"
          loading="eager"
        />
      </Flex>
      <Flex
        pos={"absolute"}
        bottom={bottom || "-14px"}
        right={right || "-10px"}
        w={`${logoW}px` || "107px"}
        h={`${logoH}px` || "108px"}
      >
        <Image
          src={heart}
          loading="eager"
          alt="love transfusion"
          style={{ width: logoW || 107, height: logoH || 108 }}
          zIndex={1}
        />
      </Flex>
    </Flex>
  )
}

export default RecipientImage