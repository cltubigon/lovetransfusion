import { Button, Flex, Heading, Text } from "@chakra-ui/react"

export default function Home() {
  console.log('Hi CLient')
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      py={10}
      bgColor={"gray.100"}
      boxShadow={"md"}
    >
      <Heading
        fontSize={"xx-large"}
        fontWeight={"bold"}
        bgColor={"rgba(255,255,255, 0.6)"}
        borderRadius={'lg'}
        p={10}
        m={2}
        boxShadow={"sm"}
        zIndex={1}
      >
        Welcome to NextJS Testing
      </Heading>
      <Text>This testing is from the source videos in YouTube</Text>
      <Button colorScheme={'twitter'}>Hello World</Button>
    </Flex>
  )
}