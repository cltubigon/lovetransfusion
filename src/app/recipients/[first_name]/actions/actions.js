"use server"
import { supabase } from "@/config/supabase/supabase"
import { revalidatePath } from "next/cache"

export const updateHugs = async ({ id, firstName }) => {
  const { data: currHugs } = await supabase
    .from("recipients")
    .select("hugs, first_name")
    .eq("id", id)

  if (currHugs) {
    const { hugs } = currHugs[0]
    const { data } = await supabase
      .from("recipients")
      .update({ hugs: hugs + 1 })
      .select()
      .eq("id", id)
    if (data) return data
  }

  revalidatePath(`/recipient/${firstName}`)
}
