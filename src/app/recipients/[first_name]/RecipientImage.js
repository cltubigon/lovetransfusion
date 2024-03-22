import { Flex } from "@chakra-ui/react"
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
  profile_picture,
}) => {
  return (
    <Flex
      zIndex={1}
      alignItems={"center"}
      position={"relative"}
      mx={"auto"}
      maxW={maxW || "250px"}
      minW={minW || "250px"}
      maxH={maxW || "260px"}
      minH={minW || "260px"}
    >
      <Image
        src={
          profile_picture
            ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${profile_picture?.fullPath}`
            : profilePic
        }
        quality={100}
        blurDataURL={profile_picture?.plaiceholders || ""}
        placeholder={"blur"}
        alt="Picture of the recipient"
        loading="eager"
        width={250}
        height={260}
        style={{
          objectFit: 'cover',
          borderRadius: "200px",
          border: `${borderW || "7px"} solid ${lightBlue}`,
          outline: `${outlineW || "5px"} solid #fff`,
          outlineOffset: outlineOffset || "-12px",
          boxShadow: "0px 0px 23px 0px rgba(49, 144, 221, 0.53)",
        }}
      />
      <Flex
        pos={"absolute"}
        bottom={bottom || "-14px"}
        right={right || "-10px"}
      >
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
