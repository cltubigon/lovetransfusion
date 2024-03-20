"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/config/supabase/supabaseServer"

export async function login(formData) {
  const supabase = createClient()
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
  redirect("/account")
}

export async function signup(formData) {
  const supabase = createClient()
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
