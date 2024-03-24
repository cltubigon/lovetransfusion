
import { redirect } from "next/navigation"
import { createServer } from "./supabaseServer"

export const isAuthenticated = async () => {
  const supabase = createServer()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/")
  }
  return data?.user
}