import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import singleUseQuery from "@/hooks/useQuery/singleUseQuery"
import PageClientRecipientPost from "./PageClientRecipientPost"
import { createClient } from "@/config/supabase/supabaseClient"
import { isAuthenticated } from "@/config/supabase/isAuthenticated"

// export const dynamicParams = true
export const revalidate = 5

export const metadata = {
  title: "Welcome to {Name}'s Page!",
  description:
    "She was riding her bike one day and suddenly felt sick. Her parents took her to the hospital where she was diagnosed with DIPG (a difficult to treat brain tumor). The doctors began taking care of {Name} right away and she is back home resting. She likes Unicorns and dancing and she hopes to meet Beyonce one day.",
}

export async function generateStaticParams() {
  const supabase = createClient()
  const { data: recipients } = supabase.from("recipients").select()
  return recipients || []
}

const RecipientsPage = async ({ params: { first_name } }) => {
  const supabase = createClient()
  console.log("recipient rendered")
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    singleUseQuery({
      queryKey: [`recipient - ${first_name}`],
      table: "recipients",
      column: "first_name",
      columnValue: first_name,
      supabase: supabase,
    })
  )

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageClientRecipientPost params={first_name} />
      </HydrationBoundary>
    </>
  )
}

export default RecipientsPage
