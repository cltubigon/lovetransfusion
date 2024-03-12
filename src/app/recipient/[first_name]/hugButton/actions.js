"use server"

import { supabase } from "@/config/supabase/supabase"
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
    await supabase
      .from("recipients")
      .update({ hugs: hugs + 1 })
      .select()
      .eq("id", id)

    revalidatePath(`/recipient/${first_name}`)
  }
}

export const updateHugs = async (id) => {
  console.log("updating Hugs")
  const { data: currHugs } = await supabase
    .from("recipients")
    .select("hugs, first_name")
    .eq("id", id)

  if (currHugs) {
    const { hugs } = currHugs[0]
    console.log({ hugs, id })
    const { data } = await supabase
      .from("recipients")
      .update({ hugs: hugs + 1 })
      .select()
      .eq("id", id)
    if (data) return data
  }
}
export const onHugsMutate = async ({firstName}) => {
  const mainKey = [`recipient - ${firstName}`]
  console.log({ mainKey, firstName })
//   return {
//     "id": "782e54de-7870-4755-8c02-a07abd9f1d3c",
//     "created_at": "2024-03-03T14:53:03.322997+00:00",
//     "first_name": "Riser",
//     "hugs": 86,
//     "category": "Uncategorized"
// }
  // await queryClient.cancelQueries(mainKey)
  // const prevQueryData = queryClient.getQueryData(mainKey)
  // console.log({ prevQueryData, queryClient })
  // queryClient.setQueryData(mainKey, (oldQueryData) => {
  //   const newQueryData = oldQueryData?.data.map((post) => {
  //     if (post.id === eqValue) {
  //       return { ...post, postApplicants: updateValue }
  //     } else {
  //       return post
  //     }
  //   })
  //   return {
  //     ...oldQueryData,
  //     data: newQueryData,
  //   }
  // })
  // return prevQueryData
}
