"use server"

import { createServer } from "@/config/supabase/supabaseServer"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function login(formData) {
  const supabase = createServer()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function signup(formData) {
  const supabase = createServer()
  // const data = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // }

  const { error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/account")
}
