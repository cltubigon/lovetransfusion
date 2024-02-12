import { Box, Heading } from "@chakra-ui/react"
import React from "react"

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
//   const data = await res.json()
//   return data
}

const Posts = async () => {
  const posts = await getPosts()
  console.log("posts", posts)
  return (
    <div>
      <h2>Posts</h2>
      {posts &&
        posts.map(({ title, body }, index) => {
          return (
            <Box key={index} mb={5} p={6} >
              <Heading>{title}</Heading>
              <p>{body}</p>
            </Box>
          )
        })}
    </div>
  )
}

export default Posts
