"use server"

import { supabase } from "@/config/supabase"
import { revalidatePath } from "next/cache"

export const incrementHugs = async ({ id, numberofHugs, firstName }) => {
  console.log("button clicked", id)
  await supabase
    .from("recipients")
    .update({ hugs: numberofHugs + 1 })
    .eq("id", id)
    .select()

  revalidatePath(`/recipient/${firstName}`)
}
