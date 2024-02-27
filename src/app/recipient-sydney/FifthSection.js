import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {
  containerInner,
  containerPadding,
  franklinDemiCond,
  franklinMedium,
  lightBlue,
} from "../globalStyle"
import childHoldingTablet from "./images/child-holding-tablet.png"
import heart from "./images/heart.png"
import ltWristband from "./images/lt-wristband.png"

const FifthSection = () => {
  return (
    <Flex py={"18px"} bgColor={"#E0F3FF"}>
      <Flex
        sx={containerPadding}
        w={"100%"}
        pt={"39px"}
        pb={"30px"}
        borderBottom={"2px solid white"}
        borderTop={"2px solid white"}
      >
        <Flex
          sx={containerInner}
          pl={"37px"}
          pr={"44px"}
          justifyContent={"space-between"}
        >
          <Flex flexBasis={"220px"}>
            <Flex position={"relative"} w={"208px"} h={"208px"}>
              <Image
                alt="Mountains"
                src={childHoldingTablet}
                placeholder="blur"
                quality={100}
                fill
                sizes="(min-width: 768px) 100vw"
                style={{
                  objectFit: "cover",
                  borderRadius: "200px",
                  border: `6px solid ${lightBlue}`,
                  outline: "5px solid #fff",
                  outlineOffset: "-11px",
                  boxShadow: "0px 0px 23px 0px rgba(49, 144, 221, 0.53)",
                }}
              />
              <Flex pos={"absolute"} bottom={"-14px"} right={"10px"}>
                <Image
                  src={heart}
                  alt="love transfusion"
                  sizes="(min-width: 768px) 100vw"
                  style={{
                    width: '69px',
                    height: '69px',
                  }}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir={"column"} flexBasis={"450px"} gap={'7px'} pl={"27px"} pr={"8px"}>
            <Text
              fontFamily={franklinMedium}
              fontSize={"18px"}
              color={lightBlue}
              pt={"14px"}
            >
              LOVE WORKS
            </Text>
            <Text
              color={"#050505"}
              fontFamily={franklinDemiCond}
              fontSize={"30px"}
              lineHeight={"33px"}
              pb={'5px'}
            >
              RESEARCH HAS SHOWN…
            </Text>
            <Text fontSize={"20px"} color={"#050505"} lineHeight={"24px"}>
              Social support can play a significant role in the mental and
              phyisical well-being of children bat- tling cancer.
            </Text>
          </Flex>

          <Flex flexDir={"column"} alignItems={"flex-end"} gap={"17px"}>
            <Text
              fontFamily={franklinDemiCond}
              fontSize={"26px"}
              color={"#288ccc"}
            >
              Love Transfusion Wrist Hugs
            </Text>
            <Flex maxW={"354px"} maxH={"164px"}>
              <Image src={ltWristband} alt="love transfusion wristband" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FifthSection
