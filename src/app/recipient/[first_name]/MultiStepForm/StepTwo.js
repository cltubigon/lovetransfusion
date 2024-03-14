import { lightBlue } from "@/app/globalStyle"
import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { useStore } from "zustand"
import utilityStore from "@/config/store"
import HeaderSection from "./HeaderSection"
import Amount from "./Amount"

const StepTwo = ({ setactiveStep }) => {
  console.log("step two rendered")
  const {
    popup: { data },
  } = useStore(utilityStore)

  if (!data) return <p>No data to show</p>

  const pricesStyle = {
    borderRadius: "8px",
    flexBasis: "32.3%",
    p: 4,
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "600",
    my: 1,
  }
  const prices = [
    { id: 1, price: "$10.00", active: false },
    { id: 2, price: "$25.00", active: false },
    { id: 3, price: "$50.00", active: false },
    { id: 4, price: "$100.00", active: false },
    { id: 5, price: "$250.00", active: true },
    { id: 6, price: "$500.00", active: false },
  ]
  return (
    <Flex flexDir={"column"} gap={3} w={"100%"}>
      {/************ Section 1 ************/}
      <HeaderSection
        data={{
          title: "How much would you like to donate today?",
          setactiveStep,
          number: 1,
          percent: "25%",
        }}
      />
      {/************ Section 2 ************/}
      <Text fontSize={"17px"} py={6}>
        All donations directly impact our organization and help us further our
        mission?
      </Text>

      {/************ Section 3 ************/}

      <Flex flexDir={"column"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={1}>
          <Flex gap={1}>
            <Text fontSize={"17px"} fontWeight={"600"}>
              Donation Amount
            </Text>
            <Text fontSize={"17px"} color={"red"}>
              {" "}
              *
            </Text>
          </Flex>
          <Text
            fontSize={"15px"}
            bgColor={"#00000017"}
            borderRadius={"5px"}
            px={3}
            py={"2px"}
          >
            USD $
          </Text>
        </Flex>
        <Flex gap={"1.5%"} flexWrap={"wrap"}>
          {prices.map((item, index) => {
            const { price, active } = item
            return (
              <Flex
                key={index}
                sx={pricesStyle}
                bgColor={active ? lightBlue : "unset"}
                color={active ? "white" : "unset"}
                border={active ? `1px solid ${lightBlue}` : "1px solid #9a9a9a"}
              >
                <Text>{price}</Text>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
      <Amount setactiveStep={setactiveStep} />
      {/* <NumberInput /> */}
    </Flex>
  )
}

export default StepTwo
