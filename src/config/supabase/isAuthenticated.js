
import { redirect } from "next/navigation"
import { createClient } from "./supabaseServer"

export const isAuthenticated = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/")
  }
  return data?.user
}