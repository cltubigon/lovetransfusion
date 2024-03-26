"use client"
import { buttonColor, buttonColorHover } from "@/app/globalStyle"
import { Button } from "@chakra-ui/react"
import { CldUploadWidget } from "next-cloudinary"
import { useState } from "react"

const CltUploadWidget = ({ parameters }) => {
  const customOptions = {
    folder: parameters?.folder || null,
  }
  return (
    <div>
      <CldUploadWidget
        //*********** generate signed Upload Signature key ***********
        signatureEndpoint={
          process.env.NEXT_PUBLIC_ROOT_DOMAIN + "/components/cloudinary/api"
        }
        //*********** API Key ***********
        apiKey={process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}
        //*********** Options ***********
        options={{
          maxFiles: parameters?.maxFiles || "unlimited",
          tags: parameters?.tags || null, //Example: ['users', 'content']
        }}
        //*********** Process results ***********
        onQueuesEnd={(result, { widget }) => {
          console.log("result", result)
          const uploads = result?.info?.files?.map((res) => {
            const file_name = res.name
            const public_id = res.uploadInfo.public_id
            const url = res.uploadInfo.secure_url
            const upload = {
              file_name,
              public_id,
              url,
            }
            return upload
          })
          if (!uploads) return
          parameters?.setuploadedFiles(uploads)
          widget.close()
        }}
      >
        {({ cloudinary, widget, open }) => {
          console.log({ cloudinary, widget, customOptions })
          widget?.update(customOptions)
          return (
            <>
              <Button
                onClick={() => open()}
                bgColor={buttonColor}
                _hover={{ buttonColorHover }}
                color={"white"}
              >
                {parameters?.customText || "Upload Images"}
              </Button>
            </>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default CltUploadWidget
