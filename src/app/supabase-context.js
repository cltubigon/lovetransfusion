"use client"
import { createClient } from "@/config/supabase/supabaseClient"
import { revalidatePath } from "next/cache"
import { useRouter } from "next/navigation"

const { createContext, useState, useEffect, useContext } = require("react")

const Context = createContext(undefined)

export const SupabaseProvider = ({ children }) => {
  const router = useRouter()
  const [supabase] = useState(() => createClient())

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh()
    })
    return () => {
      subscription.unsubscribe
    }
  }, [supabase, router])

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)
  const { supabase } = context

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider")
  }

  return supabase
}
