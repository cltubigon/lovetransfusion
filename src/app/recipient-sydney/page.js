import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Img,
  Text,
  theme,
} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import LogoSection from "./LogoSection"
import {
  containerInner,
  containerPadding,
  franklinItalic,
  franklinMedium,
  lightBlue,
} from "../globalStyle"
// import sectionOneBg from "./images/section-1-bg.png"
import sectionOneBg from "./images/section-1-bg.png"
import TitleSection from "./TitleSection"
import { BsFillPatchCheckFill } from "react-icons/bs"
import { TbDiscountCheckFilled } from "react-icons/tb"
import CareIcon from "./images/care.svg"
import returnIcon from "./images/return-icon.svg"
import heartMessage from "./images/heart-message.png"
import fbShare from "./images/fb-share.png"
import emailShare from "./images/email-share.png"
import twitterShare from "./images/twitter-share.png"
import pinterestShare from "./images/pinterest-share.png"
import heart from "./images/heart.png"
import RecipientProfile from "./RecipientProfile"
import HugMessageShare from "./HugMessageShare"
import PackageSection from "./PackageSection"

const RecipientsPage = () => {
  return (
    <>
      <LogoSection />
      <TitleSection />
      <RecipientProfile />
      <HugMessageShare />
      <PackageSection />
      <Flex h={"120vh"}></Flex>
    </>
  )
}

export default RecipientsPage
