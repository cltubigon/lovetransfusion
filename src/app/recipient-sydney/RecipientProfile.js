import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerPadding,
  franklinItalic,
  franklinMedium,
  lightBlue,
} from "../globalStyle"
import { TbDiscountCheckFilled } from "react-icons/tb"
import RecipientImage from "./RecipientImage"

const RecipientProfile = () => {
  return (
    <Flex sx={containerPadding} pb={"23px"}>
      <Flex maxW={"984px"} w={"100%"} flexDir={"column"}>
        <Flex position={"relative"} w={"100%"} display={{ phs: 'none', tls: 'flex' }}>
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
              mt={'-2px'}
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
          <RecipientImage />
          <Flex flexDir={"column"} gap={"22px"} pt={"20px"}>
            <Text
              fontSize={"28px"}
              fontFamily={franklinMedium}
              lineHeight={"33px"}
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

        <Flex justifyContent={"center"} pt={"35px"} lineHeight={"33px"}>
          <Text fontSize={"27px"} textAlign={'center'} fontFamily={franklinMedium} color={lightBlue} mt={'3px'} >
            Click Any of The Options Below To Show You Care:
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default RecipientProfile
