"use server"

import { createServer } from "@/config/supabase/supabaseServer"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function login(data) {
  const { email, password } = data
  const supabase = createServer()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return error.message
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function signup(data) {
  const supabase = createServer()
  const { email, password } = data

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: `http://localhost:3000/callback`,
    },
  })

  if (error) {
    console.log("error", error)
    // redirect("/error")
    return error.message
  }

  revalidatePath("/", "layout")
  redirect("/")
}
