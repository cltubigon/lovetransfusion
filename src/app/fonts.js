import localFont from "next/font/local"
import { Inter, Open_Sans } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
})
export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--openSans",
})

export const ArialNarrowBold = localFont({
  src: "./(fonts)/Arial-Narrow-Bold.ttf",
  display: "swap",
  variable: "--ArialNarrowBold",
})
export const franklinGothicBook = localFont({
  src: "./(fonts)/Franklin-Gothic-Book-Regular.ttf",
  display: "swap",
  variable: "--franklinGothicBook",
})
export const franklinGothicBookItalic = localFont({
  src: "./(fonts)/Franklin-Gothic-Book-Italic.ttf",
  display: "swap",
  variable: "--franklinGothicBookItalic",
})
export const franklinGothicDemiCond = localFont({
  src: "./(fonts)/Franklin-Gothic-Demi-Cond-Regular.ttf",
  display: "swap",
  variable: "--franklinGothicDemiCond",
})
export const franklinGothicMediumCond = localFont({
  src: "./(fonts)/Franklin-Gothic-Medium-Cond-Regular.ttf",
  display: "swap",
  variable: "--franklinGothicMediumCond",
})
