import { Box, Flex, Text } from "@chakra-ui/react"
import React, { Suspense } from "react"
import {
  ArialNarrowBold,
  containerInner,
  containerPadding,
  franklinDemiCond,
  franklinMedium,
  lightBlue,
} from "../../globalStyle"
import Image from "next/image"
import PackageImage from "./images/poster-package-template1-orig.png"
import blueArrow from "./images/bl-arrrow.svg"
import ContributeButton from "./ContributeButton"
import { capitalize } from "@/utilities/capitalize"
import ContributeButtonFallback from "./ContributeButtonFallback"

const PackageSection = ({ parameters }) => {
  const { id, firstName, condition, poster_image, package_image } = parameters
  const capitalizeFirstName = capitalize(firstName)
  const timeContainer = {
    bgColor: lightBlue,
    pt: "17px",
    pb: "15px",
    px: "11px",
    borderRadius: "10px",
    border: "2px solid #207AC5",
  }
  const timeText = {
    fontFamily: franklinMedium,
    fontSize: "44px",
    lineHeight: "33px",
    color: "white",
  }
  const timeLabel = {
    fontSize: "17px",
    fontFamily: franklinDemiCond,
  }
  const timeMainContainer = {
    flexDir: "column",
    alignItems: "center",
    gap: "14px",
  }

  return (
    <Flex sx={containerPadding} pt={"50px"} pb={"43px"}>
      <Flex sx={containerInner} flexDir={"column"} alignItems={"center"}>
        <Flex justifyContent={"center"}>
          <Text
            fontFamily={franklinMedium}
            fontSize={"26px"}
            color={lightBlue}
            lineHeight={"33px"}
            textAlign={"center"}
          >{`Will You Help Us Send ${capitalizeFirstName} A Care Package As Well?`}</Text>
        </Flex>
        <Flex pt={"33px"} justifyContent={"center"} flexWrap={"wrap"}>
          <Flex
            flexDir={"column"}
            gap={4}
            flexBasis={{ phs: "100%", lts: "607px" }}
            zIndex={1}
          >
            <Text
              fontFamily={franklinMedium}
              fontSize={"25px"}
              lineHeight={"33px"}
              mb={"-7px"}
            >
              Love Transfusion Care Packages
            </Text>
            <Text fontSize={"20px"} lineHeight={"22px"}>
              Filled with fun distractions and tangible reminders of love and
              support, Love Transfusion care packages contain items specifically
              designed to encourage and uplift such as personalized posters,
              books, wristbands, balloons, stuffed animals and toys.
            </Text>
            <Text fontSize={"20px"} lineHeight={"22px"}>
              Between the contents of the package and shipping, costs add up in
              a hurry. Please consider becoming a sponsor through a donation of
              any amount….
            </Text>
            <Flex gap={4} mx={"auto"} mt={"12px"}>
              <Flex pos={"relative"} alignItems={"center"}>
                <Flex
                  display={{ phs: "none", tll: "flex" }}
                  pos={"absolute"}
                  left={"-74px"}
                >
                  <Image src={blueArrow} alt="blue arrow" />
                </Flex>
                <Suspense fallback={<ContributeButtonFallback />}>
                  <ContributeButton
                    parameters={{
                      id,
                      capitalizeFirstName,
                      condition,
                      package_image,
                    }}
                  />
                </Suspense>
              </Flex>
            </Flex>

            <Flex flexDir={"column"} alignItems={"center"}>
              <Text
                fontFamily={ArialNarrowBold}
                mt={"9px"}
                mb={"14px"}
                fontSize={"15px"}
              >
                TIME REMAINING TO CONTRIBUTE:
              </Text>
              <Flex
                gap={{ phs: 2, tls: 5 }}
                justifyItems={"center"}
                alignItems={"flex-start"}
              >
                <Flex sx={timeMainContainer}>
                  <Flex sx={timeContainer}>
                    <Text sx={timeText}>00</Text>
                  </Flex>
                  <Text sx={timeLabel}>DAYS</Text>
                </Flex>
                <Flex sx={timeMainContainer}>
                  <Flex sx={timeContainer}>
                    <Text sx={timeText}>00</Text>
                  </Flex>
                  <Text sx={timeLabel}>HOURS</Text>
                </Flex>
                <Flex sx={timeMainContainer}>
                  <Flex sx={timeContainer}>
                    <Text sx={timeText}>00</Text>
                  </Flex>
                  <Text sx={timeLabel}>MINUTES</Text>
                </Flex>
                <Flex sx={timeMainContainer}>
                  <Flex sx={timeContainer}>
                    <Text sx={timeText}>00</Text>
                  </Flex>
                  <Text sx={timeLabel}>SECONDS</Text>
                </Flex>
              </Flex>
            </Flex>
            <Text
              mt={"17px"}
              lineHeight={"22px"}
              fontSize={"16px"}
            >{`* Donations are tax-deductible. Love Transfusion Inc is a 501(c)(3) nonprofit organization.`}</Text>
          </Flex>
          <Flex maxW={"273px"} flexDir={"column"} pos={"relative"}>
            <Box w={"100%"} h={"12px"}></Box>
            <Flex
              ml={"-24px"}
              pt={"21px"}
              minW={{ tls: "380px" }}
              minH={{ tls: "460px" }}
            >
              <Image
                src={
                  poster_image
                    ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${poster_image?.fullPath}`
                    : PackageImage
                }
                width={380}
                height={460}
                quality={100}
                alt="package image"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Text
            fontFamily={franklinMedium}
            lineHeight={"28px"}
            textAlign={"center"}
            fontSize={"18px"}
            color={lightBlue}
            mt={"42px"}
          >
            ITEMS IN CARE PACKAGES SERVE AS TANGIBLE REMINDERS OF LOVE AND
            SUPPORT
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PackageSection
