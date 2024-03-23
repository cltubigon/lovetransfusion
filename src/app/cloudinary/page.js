import React from "react"
import CltUploadWidget from "../components/cloudinary/CltUploadWidget"
import CltImage from "../components/CltImage"

const CloudinaryPage = () => {
  return (
    <div>
      <CltImage />
      <CltUploadWidget parameters={{ tags: ["package-image"], maxFiles: 1 }} />
    </div>
  )
}

export default CloudinaryPage
