import multipleUseQuery from "@/hooks/useQuery/multipleUseQuery"
import React from "react"
import RecipientsClientComponent from "./RecipientsClientComponent"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { isAuthenticated } from "@/config/supabase/isAuthenticated"
import { createServer } from "@/config/supabase/supabaseServer"

export const revalidate = 5

const RecipientsPage = async () => {
  console.log("recipient rendered")
  const supabase = createServer()
  const { data, error } = await supabase.auth.getUser()
  // console.log("data", data)
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    multipleUseQuery({
      supabase: supabase,
      queryKey: ["recipients"],
      table: "recipients",
      select: "first_name",
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
