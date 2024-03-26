"use client"
import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import QuillEditor from "@/app/components/ReactQuill/QuillEditor"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"

const AccordingToparagraph = () => {
  const [value, setValue] = useState("")
  const { setAccording_to_paragraph } = useStore(utilityStore)

  useEffect(() => {
    setAccording_to_paragraph(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const defaultValue =
    '<p><strong>According to &lt;SOURCE&gt;:</strong> “&lt;CONTENT HERE&gt;"</p>'

  return (
    <Flex flexDir={"column"} gap={1}>
      <Text fontSize={"18px"}>According To Paragraph:</Text>
      <QuillEditor setValue={setValue} defaultValue={defaultValue} />
    </Flex>
  )
}

export default AccordingToparagraph
