"use server"

import { supabase } from "@/config/supabase"
import { revalidatePath } from "next/cache"

export const incrementHugs = async ({ id }) => {
  console.log("button clicked", id)
  const { data: currHugs, error } = await supabase
    .from("recipients")
    .select("hugs, first_name")
    .eq("id", id)

  if (currHugs) {
    const { hugs, first_name } = currHugs[0]
    console.log({ hugs, first_name, id })
    const updateStart = () => {}
    const { data } = await supabase
      .from("recipients")
      .update({ hugs: hugs + 1 })
      .select()
      .eq("id", id)
    updateStart()
    if (data) {
      revalidatePath(`/recipient/${first_name}`)
    }
  }
}
