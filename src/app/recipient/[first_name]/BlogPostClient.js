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
  const { id, first_name: firstName, category, created_at, hugs } = recipient[0]

  console.log("recipient", recipient)
  return (
    <div>
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
      <RecipientProfile firstName={firstName} />
      <HugMessageShare parameters={{ id, firstName, hugs }} />
      <PackageSection />
      <FifthSection />
      {/* <VideoSection /> */}
      <Testimonials />
      <WristHugSection />
      <WhatIsSection />
      <CommentSection />
      <Footer />
    </div>
  )
}

export default BlogPostClient
