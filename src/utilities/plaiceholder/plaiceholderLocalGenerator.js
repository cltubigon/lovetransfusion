import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"
import logo from "@/app/recipient/[first_name]/MultiStepForm/images/full-color-logo.png"
import myFile from "@/utilities/plaiceholder/testImages/photo-1621961458348-f013d219b50c.jpg"

export const plaiceholderLocalGenerator = async () => {
  console.log("started plaiceholderLocalGenerator")
  try {
    console.log("try catch started")
    console.log("fs.readFile", fs.readFile())
    const file = await fs.readFile(myFile)

    const { base64 } = await getPlaiceholder(file)
    // console.log("base64", base64)
    return base64
  } catch (err) {
    err
  }
}
