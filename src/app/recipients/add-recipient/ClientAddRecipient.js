"use client"
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import {
  buttonColor,
  buttonColorHover,
  containerInner,
  containerPadding,
} from "../../globalStyle"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"
import AddSectionOneParagraph from "./AddSectionOneParagraph"
import { useForm } from "react-hook-form"
import Image from "next/image"
import logo from "../[first_name]/MultiStepForm/images/full-color-logo.png"
import { useRouter } from "next/navigation"
import { supabase } from "@/config/supabase/supabase"
import Link from "next/link"
import { useDeferredValue, useEffect, useState } from "react"
import Loader from "./Loader"
import CltUploadWidget from "@/app/components/cloudinary/CltUploadWidget"
import { v1, v4 } from "uuid"

const ClientAddRecipient = () => {
  const toast = useToast()
  const router = useRouter()
  const {
    recipient: { sec_one_paragraph },
  } = useStore(utilityStore)
  const { register, handleSubmit, formState, watch } = useForm()
  const { errors } = formState

  const [uploadedFiles, setuploadedFiles] = useState([])
  const [submitFormTrigger, setsubmitFormTrigger] = useState(null)

  console.log("uploadedFiles", uploadedFiles)

  const [folderName, setfolderName] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setfolderName(`${watch("first_name")}-${v4().slice(0, 8)}`)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [watch("first_name")])


  const onSubmit = async (data) => {
    if (uploadedFiles?.length === 0) {
      toast({
        description: "Images are required",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      return
    }
    setsubmitFormTrigger(true)
    const package_image = uploadedFiles?.find((item) => {
      return item.file_name.includes("care-package")
    })
    const profile_picture = uploadedFiles?.find((item) => {
      return item.file_name.includes("profile-pic")
    })
    const poster_image = uploadedFiles?.find((item) => {
      return item.file_name.includes("poster-package")
    })

    const {
      first_name,
      category,
      gender,
      condition,
      sub_title,
      according_to,
      learn_more_url,
      learn_more_text,
      what_is,
      according_to_paragraph,
    } = data

    const { data: recipient, error } = await supabase
      .from("recipients")
      .insert([
        {
          first_name: first_name,
          gender: gender,
          what_is: what_is,
          category: category,
          condition: condition,
          sub_title: sub_title,
          sec_one_paragraph: sec_one_paragraph,
          according_to: according_to,
          learn_more_url: learn_more_url,
          according_to_paragraph: according_to_paragraph,
          learn_more_text: learn_more_text,
          what_is: what_is,
          poster_image: poster_image,
          profile_picture: profile_picture,
          package_image: package_image,
        },
      ])
      .select()
    if (recipient) {
      router.push(`/recipients/${recipient[0].first_name}`)
      setsubmitFormTrigger(false)
    }
    if (error) {
      console.log("Error adding recipient details", error.message)
      setsubmitFormTrigger(false)
    }
  }

  const inputStyle = {
    bgColor: "white",
    borderColor: "#ccc",
  }

  return (
    <Flex sx={containerPadding} pt={"40px"} pb={"100px"}>
      {submitFormTrigger && <Loader />}
      <Flex sx={containerInner} flexDir={"column"}>
        <Link href={"/dashboard/recipients"}>
          <Flex mb={6}>
            <Image src={logo} quality={100} priority={true} alt="logo" />
          </Flex>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={4} flexDir={"column"}>
            <Flex gap={6}>
              {/*********** First name ***********/}
              <FormControl isInvalid={errors.first_name} isRequired>
                <FormLabel htmlFor="name">First name:</FormLabel>
                <Input
                  type="text"
                  sx={inputStyle}
                  id="first_name"
                  placeholder="First name"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.first_name && errors.first_name.message}
                </FormErrorMessage>
              </FormControl>
              {/*********** Category ***********/}
              <FormControl isInvalid={errors.category} isRequired>
                <FormLabel htmlFor="name">Category:</FormLabel>
                <Input
                  type="text"
                  sx={inputStyle}
                  id="category"
                  placeholder="Category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.category && errors.category.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex gap={6}>
              {/*********** Gender ***********/}
              <FormControl isInvalid={errors.gender} isRequired>
                <FormLabel htmlFor="name">Gender:</FormLabel>
                <Input
                  type="text"
                  sx={inputStyle}
                  id="gender"
                  placeholder="Gender"
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.gender && errors.gender.message}
                </FormErrorMessage>
              </FormControl>
              {/*********** Condition ***********/}
              <FormControl isInvalid={errors.condition} isRequired>
                <FormLabel htmlFor="name">Condition:</FormLabel>
                <Input
                  type="text"
                  sx={inputStyle}
                  id="condition"
                  placeholder="Condition"
                  {...register("condition", {
                    required: "Condition is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.condition && errors.condition.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            {/*********** Sub_title ***********/}
            <FormControl isInvalid={errors.sub_title} isRequired>
              <FormLabel htmlFor="name">Subtitle:</FormLabel>
              <Input
                type="text"
                sx={inputStyle}
                id="sub_title"
                placeholder="Subtitle"
                {...register("sub_title", {
                  required: "Subtitle is required",
                })}
              />
              <FormErrorMessage>
                {errors.sub_title && errors.sub_title.message}
              </FormErrorMessage>
            </FormControl>
            {/*********** Section One Paragraph ***********/}
            <AddSectionOneParagraph />
            {/*********** What_is ***********/}
            <FormControl isInvalid={errors.what_is} isRequired>
              <FormLabel htmlFor="name">What is:</FormLabel>
              <Input
                type="text"
                sx={inputStyle}
                id="what_is"
                placeholder="What is"
                {...register("what_is", {
                  required: `"What is" is required`,
                })}
              />
              <FormErrorMessage>
                {errors.according_to && errors.according_to.message}
              </FormErrorMessage>
            </FormControl>
            {/*********** According_to ***********/}
            <FormControl isInvalid={errors.according_to} isRequired>
              <FormLabel htmlFor="name">According to:</FormLabel>
              <Input
                type="text"
                sx={inputStyle}
                id="according_to"
                placeholder="According to"
                {...register("according_to", {
                  required: "According to is required",
                })}
              />
              <FormErrorMessage>
                {errors.according_to && errors.according_to.message}
              </FormErrorMessage>
            </FormControl>
            {/*********** According_to_paragraph ***********/}
            <FormControl isInvalid={errors.according_to_paragraph} isRequired>
              <FormLabel htmlFor="name">According to Paragraph:</FormLabel>
              <Textarea
                sx={inputStyle}
                id="according_to_paragraph"
                placeholder="According to paragraph"
                {...register("according_to_paragraph", {
                  required: `"According to paragraph" is required`,
                })}
              />
              <FormErrorMessage>
                {errors.according_to_paragraph &&
                  errors.according_to_paragraph.message}
              </FormErrorMessage>
            </FormControl>
            <Flex gap={6}>
              {/*********** Learn_more_text ***********/}
              <FormControl isInvalid={errors.learn_more_text} isRequired>
                <FormLabel htmlFor="name">Learn more Text:</FormLabel>
                <Input
                  type="text"
                  sx={inputStyle}
                  id="learn_more_text"
                  placeholder="Learn more Text"
                  {...register("learn_more_text", {
                    required: "Learn more Text is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.learn_more_text && errors.learn_more_text.message}
                </FormErrorMessage>
              </FormControl>
              {/*********** Learn_more_url ***********/}
              <FormControl isInvalid={errors.learn_more_url} isRequired>
                <FormLabel htmlFor="name">Learn more URL:</FormLabel>
                <Input
                  type="text"
                  sx={inputStyle}
                  id="learn_more_url"
                  placeholder="Learn more URL"
                  {...register("learn_more_url", {
                    required: "Learn more URL is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.learn_more_url && errors.learn_more_url.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            {/*********** Upload Images ***********/}
            {/* <ImagesUpload
              files={files}
              setfiles={setfiles}
              id={recipientFromDatabase}
              submitFormTrigger={submitFormTrigger}
              setsubmitFormTrigger={setsubmitFormTrigger}
            /> */}
            <CltUploadWidget
              parameters={{
                ButtonText: "Upload Recipient Images",
                folder: folderName,
                maxFiles: 3,
                setuploadedFiles,
              }}
            />
            {/*********** End of Inputs ***********/}
            <Button
              fontSize={"18px"}
              color={"white"}
              bgColor={buttonColor}
              _hover={{ bgColor: buttonColorHover }}
              transition={"background-color 0.5s"}
              type="submit"
              w={"full"}
            >
              Create Recipient
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}

export default ClientAddRecipient
