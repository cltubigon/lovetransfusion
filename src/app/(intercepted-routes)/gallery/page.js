import { Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const GalleryPage = () => {
  return (
    <div>
      <Link href={"/gallery/1"}>
      <Text>Preview image</Text>
      </Link>
    </div>
  )
}

export default GalleryPage
