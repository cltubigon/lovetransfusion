import { Suspense } from "react"
import ClientLogin from "./ClientLogin"
import ClientLoginFallback from "./ClientLoginFallback"

export default function LoginPage() {
  return (
    <div>
      <Suspense fallback={<ClientLoginFallback />}>
        <ClientLogin />
      </Suspense>
    </div>
  )
}
