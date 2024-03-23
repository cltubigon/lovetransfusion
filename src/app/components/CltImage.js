"use client"
import { Flex } from "@chakra-ui/react"
import buildUrl from "cloudinary-build-url"
import { CldImage } from "next-cloudinary"
import Image from "next/image"
import React from "react"

const CltImage = () => {
  const url = buildUrl("test2/zmrtep2sdiknywordcjb", {
    cloud: {
      cloudName: "dvmoprgat",
    },
    // transformations: {
    //   effect: {
    //     name: "pixelate",
    //     value: 40,
    //   },
    // },
  })
  return (
    <div>
      <Flex flexDir={"column"}>
        <Image
          src={
            "https://res.cloudinary.com/dvmoprgat/image/upload/c_limit,w_1080/f_auto/q_100/v1/test2/zmrtep2sdiknywordcjb?_a=BAVAEyBy0"
          }
          width={552}
          height={306}
          alt="next image"
        />
        <p>Next Image Cloudinary</p>
        <Image
          src={url}
          width={552}
          height={306}
          quality={100}
          alt="next image"
        />
        <p>Next Image Cloudinary Build URL</p>
        <CldImage
          width="552"
          height="306"
          quality={100}
          src="test2/zmrtep2sdiknywordcjb"
          sizes="100vw"
          alt="Description of my image"
        />
        <p>Cld Image</p>
      </Flex>
    </div>
  )
}

export default CltImage
