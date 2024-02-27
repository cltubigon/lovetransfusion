import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {
  containerPadding,
  franklinItalic,
  franklinMedium,
  lightBlue,
} from "../globalStyle"
import { TbDiscountCheckFilled } from "react-icons/tb"
import profilePic from "./images/profile-pic-placeholder2.png"
import heart from "./images/heart.png"

const RecipientProfile = () => {
  return (
    <Flex sx={containerPadding} pb={"18px"}>
      <Flex maxW={"984px"} w={"100%"} flexDir={"column"}>
        <Flex position={"relative"} w={"100%"}>
          <Flex
            alignItems={"center"}
            gap={"3px"}
            position={"absolute"}
            right={"17px"}
            top={"-18px"}
          >
            <TbDiscountCheckFilled size={37.21} color={lightBlue} />
            <Text
              fontSize={"20px"}
              color={lightBlue}
              fontFamily={franklinMedium}
            >
              VERIFIED
            </Text>
          </Flex>
        </Flex>

        <Flex pt={"19px"} gap={"10px"}>
          <Flex alignItems={"center"} position={"relative"} minW={"270px"}>
            <Image
              src={profilePic}
              placeholder="blur"
              alt="Picture of the recipient"
              width={250}
              height={250}
              style={{
                borderRadius: "200px",
                border: `7px solid ${lightBlue}`,
                outline: "5px solid #fff",
                outlineOffset: "-12px",
                boxShadow: "0px 0px 23px 0px rgba(49, 144, 221, 0.53)",
              }}
            />
            <Flex pos={"absolute"} bottom={"-14px"} right={"10px"}>
              <Image
                src={heart}
                alt="love transfusion"
                width={107}
                height={108}
              />
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap={"22px"} pt={"15px"}>
            <Text
              fontSize={"28px"}
              fontFamily={franklinMedium}
              mb={"-4px"}
            >{`Six year old {Name} was recently diagnosed with DIPG.`}</Text>
            <Text
              fontSize={"20px"}
              lineHeight={"22px"}
            >{`She was riding her bike one day and suddenly felt sick. Her parents took her to the hospital where she was diagnosed with DIPG (a difficult to treat brain tumor). The doctors began taking care of {Name} right away and she is back home resting. She likes Unicorns and dancing and she hopes to meet Beyonce one day.`}</Text>
            <Text
              fontSize={"20px"}
              fontFamily={franklinItalic}
              lineHeight={"22px"}
            >{`Please let {Name} know she is in your thoughts…`}</Text>
          </Flex>
        </Flex>

        <Flex justifyContent={"center"} pt={"35px"}>
          <Text fontSize={"27px"} fontFamily={franklinMedium} color={lightBlue}>
            Click Any of The Options Below To Show You Care:
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default RecipientProfile
