import { Flex, Text } from "@chakra-ui/react"
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
import heart from "./images/heart-proper.png"
import ltWristbandDesktop from "./images/lt-wristband-proper-desktop.png"
import ltWristbandMobile from "./images/lt-wristband-proper-mobile.png"

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
          pl={{ phs: "0", tls: "37px" }}
          pr={{ phs: "0", tls: "44px" }}
          justifyContent={{ phs: "center", lts: "space-between" }}
          // alignItems={{ phs: 'center', lts: 'flex-start' }}
        >
          <Flex
            flexBasis={"220px"}
            justifyContent={{ phs: "center", tls: "flex-start" }}
          >
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
                    width: "69px",
                    height: "69px",
                  }}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flexDir={"column"}
            flexBasis={"450px"}
            gap={"7px"}
            pl={{ phs: "0", tls: "27px" }}
            pr={{ phs: "0", tls: "8px" }}
            alignItems={{ phs: "center", tls: "flex-start" }}
          >
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
              pb={"5px"}
            >
              RESEARCH HAS SHOWN…
            </Text>
            <Text
              fontSize={"20px"}
              color={"#050505"}
              lineHeight={"24px"}
              textAlign={{ phs: "center", tls: "left" }}
            >
              Social support can play a significant role in the mental and
              phyisical well-being of children bat- tling cancer.
            </Text>
          </Flex>

          <Flex
            flexDir={"column"}
            alignItems={{ phs: "center", tll: "flex-end" }}
            gap={"17px"}
          >
            <Text
              fontFamily={franklinDemiCond}
              fontSize={"26px"}
              color={"#288ccc"}
            >
              Love Transfusion Wrist Hugs
            </Text>
            <Flex maxW={"354px"} maxH={"164px"}>
              <Image
                src={{ phs: ltWristbandMobile, tls: ltWristbandDesktop }}
                alt="love transfusion wristband"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FifthSection
