"use client"
import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"

import CareIcon from "../images/care.svg"
import { incrementHugs } from "./actions"
import { franklinMedium, lightBlue } from "@/app/globalStyle"

const HugButton = ({ parameters }) => {
  const { id, hugs: numberofHugs, customHugs } = parameters
  console.log('customHugs', customHugs)
  const buttonStyle = {
    borderRadius: "10px",
    boxShadow: "3px 3px 3px 0px rgba(47, 142, 221, 0.32)",
    border: `2px solid ${lightBlue}`,
    p: "8px 15px 6px",
    justifyContent: "center",
    alignItems: "center",
    bgColor: "white",
    cursor: "pointer",
    w: "176px",
  }
  return (
    <div>
      <Flex
        sx={buttonStyle}
        onClick={() => incrementHugs({ id })}
      >
        <Flex alignItems="center" gap="13px">
          <Text fontSize={"22px"} fontFamily={franklinMedium}>
            Hug
          </Text>
          <Image src={CareIcon} alt="care icon" quality={100} />
          <Text fontSize={"22px"} fontFamily={franklinMedium}>
            {/* {numberofHugs} */}
            {customHugs}
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default HugButton
