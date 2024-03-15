import multipleUseQuery from "@/hooks/useQuery/multipleUseQuery"
import React from "react"
import RecipientsClientComponent from "./RecipientsClientComponent"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { supabase } from "@/config/supabase/supabase"

const RecipientsPage = async () => {
  console.log("recipient rendered")
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
        <RecipientsClientComponent />
      </HydrationBoundary>
    </div>
  )
}

export default RecipientsPage
