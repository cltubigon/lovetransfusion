"use client"
import CltDropzone from "../components/Dropzone"
import { useEffect } from "react"
import { supabase } from "@/config/supabase/supabase"
import { generatePlaceholderRemote } from "@/utilities/globalActions"
import { useRouter } from "next/navigation"

const ImagesUpload = ({
  id,
  files,
  setfiles,
  submitFormTrigger,
  setsubmitFormTrigger,
}) => {
  const route = useRouter()

  const updateRecipient = (file) => {
    const myFunction = async (column) => {
      const { data, error } = await supabase
        .from("recipients")
        .update(column)
        .eq("id", id)
        .select()
      if (error) {
        console.log("error on upload", error.message)
        setsubmitFormTrigger(false)
      }
      console.log("data", data)
      return data[0]
    }

    const profilePic = file.fullPath.includes("profile-picture")
    const posterImg = file.fullPath.includes("poster-package")
    const packageImg = file.fullPath.includes("givewp-package")
    if (posterImg) {
      const data = myFunction({ poster_image: file })
      return data
    } else if (profilePic) {
      const data = myFunction({ profile_picture: file })
      return data
    } else if (packageImg) {
      const data = myFunction({ package_image: file })
      return data
    }
  }

  const gPlaceholder = async (file) => {
    const plaiceholders = await generatePlaceholderRemote(
      `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${file.fullPath}`
    )
    const newFile = { ...file, plaiceholders }
    return newFile
  }

  const handleUpload = async (file) => {
    console.log("file", file)
    const { data, error } = await supabase.storage
      .from(`recipients_images`)
      .upload(`${id}/${file.name}`, file, {
        upsert: true,
      })

    if (error) {
      setsubmitFormTrigger(false)
      throw new Error(error.message)
    }
    return data
  }

  useEffect(() => {
    if (id && files?.length > 0) {
      const uploadToSupabase = async () => {
        console.log("files", files)
        try {
          const upload = files.map(handleUpload)
          const uploadedFiles = await Promise.all(upload)
          const gplaice = uploadedFiles.map(gPlaceholder)
          const plaiceholders = await Promise.all(gplaice)
          const update = plaiceholders.map(updateRecipient)
          const updates = await Promise.all(update)
          setsubmitFormTrigger(false)
          console.log("finished all")
          console.log("updates", updates)
          // setuploads(uploadedFiles)
          console.log("uploadedFiles", uploadedFiles)
          console.log("plaiceholders", plaiceholders)
          route.push(`/recipient`)
          // return uploadedFiles
        } catch (error) {
          console.log("error during upload", error.message)
          setsubmitFormTrigger(false)
        }
      }
      uploadToSupabase()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div>
      <CltDropzone
        maxSize={3} // Int
        maxFiles={3} // Int
        accept={{ image: ["image/png", "image/jpeg", "image/jpg"] }}
        getFiles={setfiles}
        borderColor={submitFormTrigger && files?.length === 0 ? "red" : "#ccc"}
        title={"Drop your images here"}
      />
    </div>
  )
}

export default ImagesUpload
