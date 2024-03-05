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
import { Box } from "@chakra-ui/react"

export const metadata = {
  title: "Welcome to {Name}'s Page!",
  description:
    "She was riding her bike one day and suddenly felt sick. Her parents took her to the hospital where she was diagnosed with DIPG (a difficult to treat brain tumor). The doctors began taking care of {Name} right away and she is back home resting. She likes Unicorns and dancing and she hopes to meet Beyonce one day.",
}

export const revalidate = 10

export const generateStaticParams = async () => {
// export async function generateStaticParams() {
  const { data: recipients } = supabase.from("recipients").select("first_name")
  return recipients || []
}

const RecipientsPage = async ({ params: { first_name } }) => {
  // const name = capitalize(first_name)
  // console.log({ name })
  const { data } = await supabase
    .from("recipients")
    .select()
    .ilike('first_name', first_name)
  if (!data) {
    notFound()
  } else {
    console.log("data", data)
  }
  const recipient = data[0]
  const { first_name: firstName, hugs, created_at, category } = recipient
  return (
    <>
      {/* <Box>{JSON.stringify(recipient)}</Box> */}
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
      <RecipientProfile recipient={recipient} />
      <HugMessageShare parameters={{ firstName, hugs }} />
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
