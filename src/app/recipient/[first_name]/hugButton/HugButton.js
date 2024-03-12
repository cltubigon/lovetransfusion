"use client"
import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import CareIcon from "../images/care.svg"
import { updateHugs } from "./actions"
import { franklinMedium, lightBlue } from "@/app/globalStyle"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const HugButton = ({ parameters }) => {
  const { id, hugs: numberofHugs, firstName } = parameters
  const [buttonClick, setbuttonClick] = useState(false)

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => updateHugs(id),
    onMutate: async () => {
      const mainKey = [`recipient - ${firstName}`]
      await queryClient.cancelQueries(mainKey)
      const prevQueryData = queryClient.getQueryData(mainKey)
      queryClient.setQueryData(mainKey, () => {
        const oldData = prevQueryData[0]
        const newData = [{ ...oldData, hugs: numberofHugs + 1 }]
        return newData
      })
      return prevQueryData
    },
  })

  const handleClick = async () => {
    setbuttonClick(true)
    mutate()
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setbuttonClick(false)
    }, 2000)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberofHugs])

  const hugSent = {
    initial: {
      y: "0px",
      opacity: 100,
    },
    exit: {
      y: "-25px",
      opacity: 0,
      transition: {
        duration: 1.2,
      },
    },
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
        <Flex as={motion.div} alignItems="center" gap="13px" pos={"relative"}>
          <Text fontSize={"22px"} fontFamily={franklinMedium}>
            Hug
          </Text>

          <Image src={CareIcon} alt="care icon" quality={100} />
          <Text fontSize={"22px"} fontFamily={franklinMedium}>
            {numberofHugs}
          </Text>
          <Flex
            as={motion.div}
            animate={!buttonClick ? "initial" : "exit"}
            variants={hugSent}
            pos={"absolute"}
            top={"-18px"}
            fontFamily={franklinMedium}
            left={0}
            right={0}
            justifyContent={"center"}
            display={!buttonClick ? "none" : "flex"}
          >
            <Text textAlign={"centerp"}>Hug sent</Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default HugButton
