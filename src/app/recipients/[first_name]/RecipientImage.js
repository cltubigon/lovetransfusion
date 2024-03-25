import { Flex } from "@chakra-ui/react"
import Image from "next/image"
import { lightBlue } from "../../globalStyle"
import profilePicLocal from "./images/profile-pic-placeholder2.png"
import heart from "./images/heart-proper.png"
import CltImage from "@/app/components/CltImage"
import CltUploadWidget from "@/app/components/cloudinary/CltUploadWidget"
import { CldImage } from "next-cloudinary"
import buildUrl from "cloudinary-build-url"

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
  const profilePic = buildUrl("test2/qzvvneqrogogr2pryjmx", {
    cloud: {
      cloudName: "dvmoprgat",
    },
  })
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
        src={profile_picture ? `${profilePic}` : profilePicLocal}
        // src={
        //   "https://res.cloudinary.com/dvmoprgat/image/upload/c_limit,w_1920/f_auto/q_100/v1/test2/qzvvneqrogogr2pryjmx?_a=BAVAEyBy0"
        // }
        // src={
        //   "https://bnsyauupzwhhsloomymu.supabase.co/storage/v1/object/public/recipients_images/adley-profile-picture.jpg"
        // }
        // src={profilePic}
        quality={100}
        // blurDataURL={profile_picture?.plaiceholders || ""}
        // placeholder={"blur"}
        alt="Picture of the recipient"
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
