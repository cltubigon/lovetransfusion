"use client"
import { Button, Flex, Text } from "@chakra-ui/react"
import { containerInner, containerPadding } from "../../globalStyle"
import { useEffect, useState } from "react"
import QuillEditor from "@/app/components/ReactQuill/QuillEditor"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"

const AddSectionOneParagraph = () => {
  const [value, setValue] = useState("")
  const { setSec_one_paragraph } = useStore(utilityStore)

  useEffect(() => {
    setSec_one_paragraph(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Flex flexDir={'column'} gap={1}>
      <Text fontSize={"18px"}>Section One Paragraph:</Text>
      <QuillEditor setValue={setValue} />
    </Flex>
  )
}

export default AddSectionOneParagraph
