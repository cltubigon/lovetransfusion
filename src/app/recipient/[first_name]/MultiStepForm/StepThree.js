import { buttonColor, buttonColorHover, openSans } from "@/app/globalStyle"
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"
import HeaderSection from "./HeaderSection"
import { useForm } from "react-hook-form"

const StepThree = ({ setactiveStep }) => {
  const { register, handleSubmit, formState, watch } = useForm()
  const { errors } = formState

  const {
    popup: { data },
    setFNameLNameEmail,
    carePackage,
  } = useStore(utilityStore)

  const onSubmit = (data) => {
    setFNameLNameEmail(data)
    setactiveStep(4)
  }

  const number = carePackage.donationAmount
  const parsed = parseFloat(number).toFixed(2)
  console.log({ parsed })

  if (!data) return <p>No data to show</p>

  const inputStyle = {
    bgColor: "white",
    borderColor: "#8c8c8c",
    fontSize: "17px",
    py: 6,
  }
  return (
    <Flex flexDir={"column"} gap={3} w={"100%"}>
      {/************ Section 1 ************/}
      <HeaderSection
        data={{
          title: "Who's Giving Today?",
          setactiveStep,
          number: 2,
          percent: "50%",
        }}
      />
      {/************ Section 2 ************/}
      <Text fontSize={"17px"} py={6}>
        {" We'll never share this information with anyone"}
      </Text>

      {/************ Section 3 ************/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} flexDir={"column"} mb={10}>
          {/* First Name */}
          <FormControl isInvalid={errors.firstName} isRequired>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              type="text"
              defaultValue={carePackage.donorFirstName}
              sx={inputStyle}
              id="firstName"
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>
          {/* Last Name */}
          <FormControl isInvalid={errors.lastName}>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              type="text"
              defaultValue={carePackage.donorLastName}
              sx={inputStyle}
              id="lastName"
              placeholder="Last name"
              {...register("lastName")}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>
          {/* Email */}
          <FormControl isInvalid={errors.email} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              defaultValue={carePackage.donorEmailAddress}
              sx={inputStyle}
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        {/************ Button Section ************/}

        <Button
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
          type="submit"
          mb={3}
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
      </form>
    </Flex>
  )
}

export default StepThree
