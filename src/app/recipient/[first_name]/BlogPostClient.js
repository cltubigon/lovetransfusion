"use client"
import { supabase } from "@/config/supabase/supabase"
import React from "react"
import LogoSection from "./LogoSection"
import TitleSection from "./TitleSection"
import RecipientProfile from "./RecipientProfile"
import HugMessageShare from "./HugMessageShare"
import PackageSection from "./PackageSection"
import FifthSection from "./FifthSection"
import VideoSection from "./VideoSection"
import Testimonials from "./Testimonials"
import WristHugSection from "./WristHugSection"
import WhatIsSection from "./WhatIsSection"
import CommentSection from "./CommentSection"
import Footer from "./Footer"
import { notFound } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
// import singleUseQueryInitialdata from "@/hooks/useQuery/singleUseQueryInitialdata"
import singleUseQuery from "@/hooks/useQuery/singleUseQuery"
import { Box } from "@chakra-ui/react"

const BlogPostClient = ({ params }) => {
  const { data: recipient } = useQuery(
    singleUseQuery({
      queryKey: [`recipient - ${params}`],
      table: "recipients",
      column: "first_name",
      columnValue: params,
      supabase: supabase,
    })
  )
  if (recipient?.length === 0) {
    return notFound()
  }
  const { id, first_name: firstName, category, created_at, hugs } = recipient[0]

  console.log("recipient", recipient)
  return (
    <Box minH={"5200px"}>
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
      <RecipientProfile firstName={firstName} />
      <HugMessageShare parameters={{ id, firstName, hugs }} />
      <PackageSection parameters={{ id, firstName }} />
      <FifthSection />
      <VideoSection />
      <Testimonials />
      <WristHugSection />
      <WhatIsSection />
      <CommentSection />
      <Footer />
    </Box>
  )
}

export default BlogPostClient
