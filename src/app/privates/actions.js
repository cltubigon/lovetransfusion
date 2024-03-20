"use server"
import { createClient } from "@/config/supabase/supabaseServer"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const logout = async () => {
  const supabase = createClient()

  let { error } = await supabase.auth.signOut()

  if (error) {
    if (error) {
      redirect("/error")
    }
  }

  revalidatePath("/", "layout")
  redirect("/")
}
