import multipleUseQuery from "@/hooks/useQuery/multipleUseQuery"
import React from "react"
import RecipientsClientComponent from "./RecipientsClientComponent"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { createClient } from "@/config/supabase/supabaseServer"

export const revalidate = 5

const RecipientsPage = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  console.log("recipient rendered")
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    multipleUseQuery({
      supabase: supabase,
      queryKey: ["recipients"],
      table: "recipients",
      select: "first_name, profile_picture",
    })
  )
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RecipientsClientComponent data={data} />
      </HydrationBoundary>
    </div>
  )
}

export default RecipientsPage
