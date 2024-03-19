"use server"
import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"

export const generatePlaceholder = async (image) => {
  console.log("started plaiceholderLocalGenerator")
  try {
    const file = await fs.readFile(image)

    const { base64, color } = await getPlaiceholder(file)
    console.log("base64", base64)
    return { base64, color }
  } catch (err) {
    err
  }
}
export const generatePlaceholderRemote = async (image) => {
  console.log('image', image)
  try {
    const buffer = await fetch(image).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    )
    const { base64 } = await getPlaiceholder(buffer)
    console.log(base64)
    return base64
  } catch (err) {
    err
  }
}