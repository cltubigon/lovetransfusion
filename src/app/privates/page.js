import { createClient } from "@/config/supabase/supabaseServer"
import { redirect } from "next/navigation"

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  console.log('data', data)
  if (error || !data?.user) {
    redirect("/")
  }

  return (
    <>
    <p>Hello {data.user.email}</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
