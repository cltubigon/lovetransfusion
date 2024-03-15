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
  const {
    id,
    first_name: firstName,
    sub_title,
    category,
    gender,
    sec_one_paragraph,
    according_to,
    according_to_paragraph,
    learn_more_url,
    learn_more_text,
    created_at,
    hugs,
    what_is,
    condition,
  } = recipient[0]

  console.log("recipient", recipient)
  return (
    <Box minH={"5200px"}>
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
      <RecipientProfile
        parameters={{ firstName, sub_title, sec_one_paragraph, gender }}
      />
      <HugMessageShare parameters={{ id, firstName, hugs }} />
      <PackageSection parameters={{ id, firstName }} />
      <FifthSection condition={condition} />
      <VideoSection firstName={firstName} />
      <Testimonials />
      <WristHugSection />
      <WhatIsSection
        parameters={{
          what_is,
          according_to,
          according_to_paragraph,
          learn_more_text,
          learn_more_url,
        }}
      />
      <CommentSection />
      <Footer />
    </Box>
  )
}

export default BlogPostClient
