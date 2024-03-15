"use client"
import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import QuillEditor from "@/app/components/ReactQuill/QuillEditor"
import { useStore } from "zustand"
import utilityStore from "@/config/store"

const AddAccordingToParagraph = () => {
  const [value, setValue] = useState("")
  const { setAccording_to_paragraph } = useStore(utilityStore)

  useEffect(() => {
    setAccording_to_paragraph(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Flex flexDir={"column"} gap={1}>
      <Text fontSize={"18px"}>According to aragraph:</Text>
      <QuillEditor setValue={setValue} />
    </Flex>
  )
}

export default AddAccordingToParagraph
