import React from "react"
import ClientAddRecipient from "./ClientAddRecipient.js"
import { isAuthenticated } from "@/config/supabase/isAuthenticated.js"

const AddRecipient = async () => {
  const data = await isAuthenticated()
  console.log("data", data)
  return (
    <div>
      <ClientAddRecipient />
    </div>
  )
}

export default AddRecipient
