"use client"
import { Button, Flex } from "@chakra-ui/react"
import CltDropzone from "../components/Dropzone"
import { containerInner, containerPadding } from "../globalStyle"
import { useState } from "react"
import { supabase } from "@/config/supabase/supabase"
import Image from "next/image"
import { generatePlaceholderRemote } from "@/utilities/globalActions"

const TestPage = () => {
  const [files, setfiles] = useState([])
  const [uploads, setuploads] = useState([])

  const uploadToSupabase = async (file) => {
    console.log('upload started')
    const { data, error } = await supabase.storage
      .from("profile_picture")
      .upload(`folder10/${file.lastModified}`, file)
    if (data) {
      console.log('finished uploading and started plaiceholder')
      const plaiceholder = await generatePlaceholderRemote(
        `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${data.fullPath}`
      )
      console.log('plaiceholder finished')
      return { ...data, plaiceholder }
    }
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  const handleUpload = async () => {
    try {
      const upload = files.map(uploadToSupabase)
      const uploadedFiles = await Promise.all(upload)
      console.log('finished all')
      setuploads(uploadedFiles)
    } catch (error) {
      console.log("error during upload", error.message)
    }
  }

  console.log("uploads", uploads)
  return (
    <div>
      <Flex sx={containerPadding} py={10}>
        <Flex sx={containerInner} flexDir={"column"} gap={2}>
          <CltDropzone
            maxSize={3} // Int
            maxFiles={2} // Int
            accept={{ image: ["image/png", "image/jpeg", "image/jpg"] }}
            getFiles={setfiles}
          />
          {uploads?.map((image, index) => {
            return (
              <Flex key={index}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${image.fullPath}`}
                  placeholder="blur"
                  blurDataURL={image.plaiceholder}
                  alt={image.path}
                  width={300}
                  height={300}
                  quality={100}
                />
              </Flex>
            )
          })}

          <Button onClick={handleUpload}>Upload</Button>
        </Flex>
      </Flex>
    </div>
  )
}

export default TestPage
