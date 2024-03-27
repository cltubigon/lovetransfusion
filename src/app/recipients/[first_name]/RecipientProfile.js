import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerPadding,
  franklinItalic,
  franklinMedium,
  lightBlue,
} from "../../globalStyle"
import { TbDiscountCheckFilled } from "react-icons/tb"
import RecipientImage from "./RecipientImage"

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const RecipientProfile = ({
  parameters: {
    profile_picture,
    firstName,
    sub_title,
    sec_one_paragraph,
    gender,
  },
}) => {
  console.log("RecipientProfile")
  const capitalizeName = capitalize(firstName)
  const handleOut = () => {
    console.log("I am out")
  }
  return (
    <Flex sx={containerPadding} pb={"23px"}>
      <Flex maxW={"984px"} w={"100%"} flexDir={"column"}>
        <Flex
          position={"relative"}
          w={"100%"}
          display={{ phs: "none", tls: "flex" }}
        >
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
              mt={"-2px"}
              fontFamily={franklinMedium}
            >
              VERIFIED
            </Text>
          </Flex>
        </Flex>

        <Flex
          pt={"19px"}
          gap={"10px"}
          flexWrap={{ phs: "wrap", tls: "nowrap" }}
        >
          <Flex justifyContent={"center"} w={"100%"}>
            <RecipientImage profile_picture={profile_picture} />
          </Flex>
          <Flex flexDir={"column"} gap={"22px"} pt={"20px"} pl={"20px"}>
            <Text
              fontSize={"28px"}
              fontFamily={franklinMedium}
              lineHeight={"33px"}
            >
              {sub_title}
            </Text>
            <Box
              className={"style_quill_html"}
              pr={{ phs: 0, tll: "10px" }}
              fontSize={"20px"}
              lineHeight={"22px"}
              dangerouslySetInnerHTML={{ __html: sec_one_paragraph }}
            ></Box>
            <Text
              fontSize={"20px"}
              fontFamily={franklinItalic}
              lineHeight={"22px"}
            >{`Please let ${capitalizeName} know ${
              gender.toLowerCase() === "female" ? "she" : "he"
            } is in your thoughts…`}</Text>
          </Flex>
        </Flex>

        <Flex justifyContent={"center"} pt={"35px"} lineHeight={"33px"}>
          <Text
            fontSize={"27px"}
            textAlign={"center"}
            fontFamily={franklinMedium}
            color={lightBlue}
            mt={"3px"}
          >
            Click Any of The Options Below To Show You Care:
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default RecipientProfile
