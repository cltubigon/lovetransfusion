"use client"
import { Flex, Input, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { RiDeleteBinLine } from "react-icons/ri"
import { IoImagesOutline } from "react-icons/io5"

const CltDropzone = ({
  maxSize,
  maxFiles,
  height,
  accept,
  title,
  getFiles,
  borderColor,
}) => {
  const [files, setfiles] = useState([])
  const toast = useToast()

  useEffect(() => {
    getFiles(files)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const onDropAccepted = (acceptedFiles, events) => {
    if (
      files.length < maxFiles &&
      files.length + acceptedFiles.length <= maxFiles
    ) {
      setfiles([...files, ...acceptedFiles])
    }
  }

  const onDropRejected = (fileRejections) => {
    toast({
      description: fileRejections[0].errors[0].code,
      status: "error",
      duration: 3000,
      isClosable: true,
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: maxSize * 1048576,
    maxFiles,
    accept,
    onDropAccepted,
    onDropRejected,
  })

  const handleDelete = (e) => {
    e.stopPropagation()
    setfiles([])
  }
  return (
    <Flex
      px={10}
      // pt={10}
      pb={4}
      height={height || "120px"}
      borderRadius={"md"}
      border={
        files?.length > 0
          ? `1px dashed #1DA1F2`
          : `1px dashed ${borderColor || "#646C7F"}`
      }
      justifyContent={"center"}
      alignItems={"center"}
      {...getRootProps({ className: "dropzone" })}
      pos={"relative"}
      overflow={"hidden"}
      bgColor={files?.length > 0 && "blue.50"}
      w={"100%"}
    >
      {/************** Close button **************/}
      <Flex pos={"absolute"} top={2} right={2} gap={4} alignItems={"center"}>
        {maxSize && (
          <Text fontSize={"14px"} color={"#646C7F"}>
            Max file size: {maxSize >= 1 ? maxSize : maxSize * 1024}
            {maxSize >= 1 ? "MB" : "KB"}
          </Text>
        )}
        {maxSize && (
          <Text fontSize={"14px"} color={"#646C7F"}>
            File limit: {maxFiles}
          </Text>
        )}
        <RiDeleteBinLine
          onClick={handleDelete}
          fontSize={"18px"}
          cursor={"pointer"}
          color="#646C7F"
          title="remove all"
        />
      </Flex>
      {/************** Input **************/}
      <Input {...getInputProps()} />
      {files.length === 0 ? (
        <Text fontSize={"24px"} color={"#646C7F"}>
          {title || "Drop your files here"}
        </Text>
      ) : (
        //************** Counter **************
        <Flex pos={"relative"}>
          <Flex
            pos={"absolute"}
            w={"20px"}
            h={"20px"}
            justifyContent={"center"}
            fontSize={"13px"}
            alignItems={"center"}
            bgColor={"white"}
            p={"2px"}
            borderRadius={"50px"}
            top={"-2px"}
            right={"-9px"}
            border={"1px solid #ccc"}
            boxShadow={"md"}
          >
            <Text>{files.length}</Text>
          </Flex>
          {/* ************** Image Icon ************** */}
          <IoImagesOutline fontSize={"52px"} color={"#646C7F"} />
        </Flex>
      )}
      {/************** Bottom row **************/}
      <Flex
        pos={"absolute"}
        bottom={0}
        left={0}
        w={"100%"}
        px={2}
        bgColor={files?.length > 0 ? "blue.100" : "#EBECEE"}
      >
        <Text color={"#646C7F"}>
          Allowed types:{" "}
          {accept.image.map((type) => {
            const item = type.replace("image/", "")
            return " ." + item
          })}
        </Text>
      </Flex>
    </Flex>
  )
}

export default CltDropzone
