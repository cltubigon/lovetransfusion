"use client"
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
import singleUseQuery from "@/hooks/useQuery/singleUseQuery"
import { Box } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { createClient } from "@/config/supabase/supabaseClient"

const PageClientRecipientPost = ({ params }) => {
  const supabase = createClient()
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
    profile_picture,
    package_image,
    poster_image,
  } = recipient[0]

  return (
    <Box minH={"5200px"}>
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
      <RecipientProfile
        parameters={{
          profile_picture,
          firstName,
          sub_title,
          sec_one_paragraph,
          gender,
        }}
      />
      <HugMessageShare
        parameters={{ id, firstName, hugs, package_image, sub_title }}
      />
      <PackageSection
        parameters={{ id, firstName, condition, poster_image, package_image }}
      />
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
      <CommentSection parameters={{ profile_picture }} />
      <Footer />
    </Box>
  )
}

export default PageClientRecipientPost
