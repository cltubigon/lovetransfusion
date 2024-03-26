"use client"
import { Flex } from "@chakra-ui/react"
import "react-quill/dist/quill.snow.css"
import "./QuillStyle.css"
import dynamic from "next/dynamic"

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    // [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    // ["link", "image"],
    // [{ align: [] }, { color: [] }, { background: [] }],
    // ["clean"],
  ],
}

// const formats = [
//   //   'font',
//   //   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   //   "image",
//   "align",
//   "color",
//   "background",
// ]
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

function QuillEditor({ setValue, defaultValue }) {
  const handleChange = (content, delta, source, editor) => {
    // const data = { content, delta, source, editor }  // Available Data
    setValue(content)
  }

  return (
    <Flex w={"100%"} mb={"70px"} h={"300px"} position={"relative"}>
      <ReactQuill
        style={{ height: "100%", width: "100%" }}
        theme="snow"
        modules={modules}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </Flex>
  )
}

export default QuillEditor
