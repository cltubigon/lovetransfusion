import { Text } from "@chakra-ui/react"
import React from "react"
import { isAuthenticated } from "@/config/supabase/isAuthenticated"

export const dynamic = "force-dynamic"

const Dashboard = async ({}) => {
  await isAuthenticated("/login?next=dashboard")
  return (
    <div>
      <Text>Dashboard content</Text>
    </div>
  )
}

export default Dashboard
