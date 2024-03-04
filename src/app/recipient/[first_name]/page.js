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
import { Box, Text } from "@chakra-ui/react"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Welcome to {Name}'s Page!",
  description:
    "She was riding her bike one day and suddenly felt sick. Her parents took her to the hospital where she was diagnosed with DIPG (a difficult to treat brain tumor). The doctors began taking care of {Name} right away and she is back home resting. She likes Unicorns and dancing and she hopes to meet Beyonce one day.",
}

const getRecipient = async (name) => {
  let { data: recipients, error } = await supabase
    .from("recipients")
    .select("*")
    .ilike("first_name", name)
  if (recipients) {
    return recipients[0]
  }
  if (error) console.log({ error })
}

const RecipientsPage = async ({ params }) => {
  const { first_name } = params
  const recipient = await getRecipient(first_name)
  if (!recipient) {
    notFound()
  }
  const {first_name: firstName, hugs, created_at, category} = recipient
  // console.log("recipient", recipient)
  return (
    <>
      <LogoSection />
      <TitleSection
      parameters={{ firstName, category, created_at }}
      />
      <RecipientProfile recipient={recipient} />
      <HugMessageShare parameters={{ firstName, hugs }} />
      <PackageSection />
      <FifthSection />
      {/* <VideoSection /> */}
      <Testimonials />
      <WristHugSection />
      <WhatIsSection />
      <CommentSection />
      <Footer />
    </>
  )
}

export default RecipientsPage
