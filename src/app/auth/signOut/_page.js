import { isAuthenticated } from "@/config/supabase/isAuthenticated"
import { Button } from "@chakra-ui/react"
import { logout } from "./actions"

export default async function PrivatePage() {
  const user = await isAuthenticated({ errorRedirect: "/login" })

  return (
    <>
      <p>{user?.email}</p>
      <form>
        <Button type="submit" formAction={logout}>Logout</Button>
      </form>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
