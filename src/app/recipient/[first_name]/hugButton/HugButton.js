"use client"
import { Flex, Text } from "@chakra-ui/react"
import React, { useOptimistic, startTransition } from "react"
import Image from "next/image"
import CareIcon from "../images/care.svg"
import { incrementHugs } from "./actions"
import { franklinMedium, lightBlue } from "@/app/globalStyle"

const HugButton = ({ parameters }) => {
  const { id, hugs: numberofHugs } = parameters

  const [optimisticHug, addOptimisticHug] = useOptimistic(
    [numberofHugs],
    (state, newHug) => [newHug + 1]
  )

  const handleClick = async () => {
    startTransition(() => {
      addOptimisticHug(numberofHugs)
    })
    incrementHugs({ id })
  }

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
      <Flex sx={buttonStyle} onClick={handleClick}>
        <Flex alignItems="center" gap="13px">
          <Text fontSize={"22px"} fontFamily={franklinMedium}>
            Hug
          </Text>

          <Image src={CareIcon} alt="care icon" quality={100} />
          {optimisticHug?.map((h, k) => {
            return (
              <Text key={k} fontSize={"22px"} fontFamily={franklinMedium}>
                {h}
              </Text>
            )
          })}
        </Flex>
      </Flex>
    </div>
  )
}

export default HugButton
