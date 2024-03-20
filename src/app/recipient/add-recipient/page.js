import React from "react"
import ClientAddRecipient from "./clientAddRecipient.js"
import { isAuthenticated } from "@/config/supabase/isAuthenticated.js"

const AddRecipient = async () => {
  await isAuthenticated()
  return (
    <div>
      <ClientAddRecipient />
    </div>
  )
}

export default AddRecipient
