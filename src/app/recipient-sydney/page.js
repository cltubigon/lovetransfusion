import React from "react"
import LogoSection from "./LogoSection"
import TitleSection from "./TitleSection"
import RecipientProfile from "./RecipientProfile"
import HugMessageShare from "./HugMessageShare"
import PackageSection from "./PackageSection"
import FifthSection from "./FifthSection"
// import VideoSection from "./VideoSection"
import Testimonials from "./Testimonials"
import WristHugSection from "./WristHugSection"
import WhatIsSection from "./WhatIsSection"
import CommentSection from "./CommentSection"
import Footer from "./Footer"

const RecipientsPage = () => {
  return (
    <>
      <LogoSection />
      <TitleSection />
      <RecipientProfile />
      <HugMessageShare />
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
