"use client"
import { Button } from "@chakra-ui/react"
import { CldUploadWidget } from "next-cloudinary"

const CltUploadWidget = ({ parameters }) => {
  return (
    <div>
      <CldUploadWidget
        signatureEndpoint={
          process.env.NEXT_PUBLIC_ROOT_DOMAIN + "/components/cloudinary/api"
        }
        apiKey={process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}
        options={{
          maxFiles: parameters?.maxFiles || null,
          folder: parameters?.folder || null,
          tags: parameters?.tags || null,
          resourceType: parameters?.resourceType || "auto",
        }}
      >
        {({ open }) => {
          return <Button onClick={() => open()}>Upload an Image</Button>
        }}
      </CldUploadWidget>
    </div>
  )
}

export default CltUploadWidget
