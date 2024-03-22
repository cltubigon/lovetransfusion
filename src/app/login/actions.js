"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/config/supabase/supabaseServer"

export async function login(data) {
  const supabase = createClient()
  console.log("data", data)
  const { email, password } = data
  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    console.log("error", error.message)
    const errorMessage = error.message
    return errorMessage
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function signup(formData) {
  const supabase = createClient()
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/")
}
