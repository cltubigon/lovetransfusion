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
import { supabase } from "@/config/supabase"
import { notFound } from "next/navigation"

// export const dynamicParams = true
export const revalidate = 5

export async function generateMetadata({ params: { first_name } }) {
  return {
    title: `Welcome to ${first_name}'s Page!`,
    description: `She was riding her bike one day and suddenly felt sick. Her parents took her to the hospital where she was diagnosed with DIPG (a difficult to treat brain tumor). The doctors began taking care of ${first_name} right away and she is back home resting. She likes Unicorns and dancing and she hopes to meet Beyonce one day.`,
  }
}

export async function generateStaticParams() {
  const { data: recipients } = supabase.from("recipients").select()
  return recipients || []
}

const RecipientsPage = async ({ params: { first_name } }) => {
  console.log("recipient rendered")
  const { data } = await supabase
    .from("recipients")
    .select()
    .ilike("first_name", first_name)

  if (!data) {
    notFound()
  }

  const recipient = data[0]
  const { id, first_name: firstName, hugs, created_at, category } = recipient
  return (
    <>
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
      <RecipientProfile recipient={recipient} />
      <HugMessageShare parameters={{ id, firstName, hugs }} />
      <PackageSection />
      <FifthSection />
      <VideoSection />
      <Testimonials />
      <WristHugSection />
      <WhatIsSection />
      <CommentSection />
      <Footer />
    </>
  )
}

export default RecipientsPage
