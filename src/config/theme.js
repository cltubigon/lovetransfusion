"use client"
/* theme.ts */
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: "var(--franklinGothicDemiCond)",
    body: "var(--franklinGothicBook)",
  },
  breakpoints: {
    phs: "0px", // small phone
    phl: "414px", // large phone
    tls: "768px", // small tablet
    tll: "960px", // large tablet
    lts: "1024px", // small laptop
    ltl: "1280px", // large laptop
    dts: "1440px", // small desktop
    dtl: "1920px", // large desktop
  },
})