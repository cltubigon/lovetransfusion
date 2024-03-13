import { Box, ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/config/theme"
import {
  franklinGothicBookItalic,
  franklinGothicBook,
  franklinGothicDemiCond,
  franklinGothicMediumCond,
  inter,
  openSans,
  ArialNarrowBold,
  SegoePrint,
} from "../config/fonts"
import Popup from "./components/Popup"
import TanstackProvider from "@/config/providers/TanstackProvider"

export const metadata = {
  title: {
    default: `Love Transfusion`,
    template: `%s | Love Transfusion`,
  },
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className={`${SegoePrint.variable} ${openSans.variable} ${inter.variable} ${franklinGothicBookItalic.variable} ${franklinGothicDemiCond.variable} ${franklinGothicMediumCond.variable} ${franklinGothicBook.variable} ${ArialNarrowBold.variable}`}
    >
      <body style={{ overflow: "hidden" }}>
        <TanstackProvider>
          <ChakraProvider theme={theme}>
            <Popup />
            <Box overflowY={"scroll"} maxH={"100vh"}>
              {children}
            </Box>
          </ChakraProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}
