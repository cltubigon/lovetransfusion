import {
  buttonColor,
  buttonColorHover,
  franklinMedium,
  lightBlue,
  openSans,
} from "@/app/globalStyle"
import { Button, Flex, Text } from "@chakra-ui/react"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"
import HeaderSection from "./HeaderSection"
import Amount from "./Amount"
import { FaLock } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"

const StepTwo = ({ setactiveStep }) => {
  console.log("step two rendered")
  const {
    popup: { data },
    carePackage: { donationAmount, priceList },
    setDonationAmount,
    setPriceList,
  } = useStore(utilityStore)
  console.log({ donationAmount })

  if (!data) return <p>No data to show</p>

  const pricesStyle = {
    borderRadius: "8px",
    flexBasis: "32.3%",
    p: 4,
    justifyContent: "center",
    fontSize: "18px",
    my: 1,
    fontFamily: franklinMedium
  }
  const gotoStepThree = () => {
    setactiveStep(3)
  }
  const handlePriceClick = ({ price, id }) => {
    const float = price.replace("$", "")
    const parsedFloat = parseFloat(float)
    setDonationAmount(parsedFloat)
    setPriceList(id)
  }
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
            <Text fontSize={"20px"} fontFamily={franklinMedium} >
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
          {priceList?.map((item, index) => {
            const { id, price, active } = item
            return (
              <Flex
                key={index}
                sx={pricesStyle}
                bgColor={active ? lightBlue : "unset"}
                color={active ? "white" : "unset"}
                border={active ? `1px solid ${lightBlue}` : "1px solid #9a9a9a"}
                onClick={() => handlePriceClick({ price, id })}
              >
                <Text>{price}</Text>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
      <Amount setactiveStep={setactiveStep} />
      <Button
        mt={5}
        color={"white"}
        fontSize={"16px"}
        fontFamily={openSans}
        bgColor={buttonColor}
        _hover={{ bgColor: buttonColorHover }}
        transition={"background-color 0.5s"}
        w={"full"}
        rightIcon={<FiArrowRight fontSize={"18px"} />}
        borderRadius={"4px"}
        p={"25px 16px"}
        onClick={gotoStepThree}
        // mb={3}
      >
        Donate Now
      </Button>
      <Flex
        color="#00d084"
        alignItems={"center"}
        gap={2}
        justifyContent={"center"}
      >
        <FaLock fontSize={"12px"} />
        <Text fontSize={"12px"}>Secure donation</Text>
      </Flex>
    </Flex>
  )
}

export default StepTwo
