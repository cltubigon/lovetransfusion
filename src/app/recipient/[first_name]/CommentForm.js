"use client"
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react"
import React from "react"
import {
  buttonColor,
  buttonColorHover,
  franklinMedium,
  lightBlue,
} from "../../globalStyle"
import { useForm } from "react-hook-form"

const CommentForm = () => {
  const { register, handleSubmit, formState, control, watch } = useForm()
  const { errors } = formState

  const onSubmit = () => {
    console.log("form is submitted")
  }
  const inputStyle = {
    bgColor: "white",
    borderColor: "#c7e9ff",
    _placeholder: { color: lightBlue },
  }
  return (
    <Flex flexDir={"column"}>
      <Text fontFamily={franklinMedium} color={"#606060"} fontSize={"23px"}>
        Leave a note of encouragement:
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* ------------------- Comment ------------------- */}
        <Flex flexDir={"column"} gap={4} mt={2}>
          <FormControl isInvalid={errors.comment} isRequired>
            {/* <FormLabel htmlFor="comment">Comment</FormLabel> */}
            <Textarea
              sx={inputStyle}
              resize={"none"}
              id="comment"
              placeholder="Comment*"
              {...register("comment", {
                required: "Comment is required",
              })}
            />
            <FormErrorMessage>
              {errors.comment && errors.comment.message}
            </FormErrorMessage>
          </FormControl>
          {/* ------------------- Email ------------------- */}
          <Flex gap={4} flexDir={{ phs: "column", tls: "row" }}>
            <Flex flexBasis={{ phs: "100%", tls: "50%" }}>
              <FormControl isInvalid={errors.name} isRequired>
                {/* <FormLabel htmlFor="name">Name</FormLabel> */}
                <Input
                  type="text"
                  sx={inputStyle}
                  id="name"
                  placeholder="Name*"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex flexDir={"column"} flexBasis={{ phs: "100%", tls: "50%" }}>
              <FormControl isInvalid={errors.email} isRequired>
                {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                <Input
                  type="email"
                  id="email"
                  sx={inputStyle}
                  placeholder="Email*"
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
              <Text color={lightBlue} fontSize={"14px"} ml={4} mt={"5px"}>
                Your email address will not be published.
              </Text>
            </Flex>
          </Flex>
          <Button
            mt={"33px"}
            mb={4}
            fontSize={"16px"}
            maxW={"133px"}
            color={"white"}
            // fontFamily={openSans}
            bgColor={buttonColor}
            _hover={{ bgColor: buttonColorHover }}
            transition={"background-color 0.5s"}
            type="submit"
            w={"full"}
          >
            Post comment
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default CommentForm
