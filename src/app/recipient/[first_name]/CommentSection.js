import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import {
  containerInner,
  containerPadding,
  franklinDemiCond,
  lightBlue,
} from "../../globalStyle"
import RecipientImage from "./RecipientImage"
import CommentForm from "./CommentForm"

const CommentSection = () => {
  return (
    <div id="comment-section">

    <Flex className="comment-section" pt={5} bgColor={"#E0F3FF"}>
      <Flex
        sx={containerPadding}
        borderTop={"2px solid white"}
        py={10}
        w={"100%"}
      >
        <Flex sx={containerInner} justifyContent={"center"}>
          <Flex maxW={"860px"} w={"100%"} flexDir={"column"}>
            <RecipientImage
              maxW={"155px"}
              minW={"157px"}
              logoW={68.09}
              logoH={68.77}
              borderW={"4px"}
              outlineW={"4px"}
              outlineOffset={"-8px"}
              bottom={"-9px"}
              right={"-15px"}
            />
            <Flex
              pos={"relative"}
              w={"100%"}
              justifyContent={"center"}
              borderTop={`2px solid ${lightBlue}`}
              mt={"33px"}
              mb={'40px'}
            >
              <Text
                bgColor={"#E0F3FF"}
                px={"13px"}
                pos={"absolute"}
                mx={"auto"}
                top={"-25px"}
                
                fontFamily={franklinDemiCond}
                fontSize={"30px"}
                color={lightBlue}
              >
                MESSAGES
              </Text>
            </Flex>
            <CommentForm />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </div>
  )
}

export default CommentSection
