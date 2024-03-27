"use server"
import { createServer } from "@/config/supabase/supabaseServer"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const logout = async () => {
  const supabase = createServer()

  let { error } = await supabase.auth.signOut()

  if (error) {
    if (error) {
      console.log("error", error)
      redirect("/error")
    }
  }

  revalidatePath("/", "layout")
  redirect("/login")
}
