"use client"
import { Button } from "@chakra-ui/react"
import { CldUploadWidget } from "next-cloudinary"

const CltUploadWidget = ({
  parameters: { tags, maxFiles, resourceType, folder },
}) => {
  return (
    <div>
      <CldUploadWidget
        signatureEndpoint={
          process.env.NEXT_PUBLIC_ROOT_DOMAIN + "/cloudinary/api"
        }
        apiKey={process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}
        options={{
          maxFiles: maxFiles || null,
          folder: folder || null,
          tags: tags || null,
          resourceType: resourceType || "auto",
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
