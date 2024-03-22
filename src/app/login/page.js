import { Flex } from "@chakra-ui/react"
import { login, signup } from "./actions"
import ClientLogin from "./ClientLogin"

export default function LoginPage() {
  return (
    <div>
      <ClientLogin />
    </div>
  )
}
