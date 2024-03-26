import React from "react"
import ClientAddRecipient from "./ClientAddRecipient"
import { isAuthenticated } from "@/config/supabase/isAuthenticated"

const AddRecipientPage = async () => {
  const authenticated = await isAuthenticated("/login?next=recipients/add-recipient")
  console.log("authenticated", authenticated)
  return (
    <div>
      <ClientAddRecipient />
    </div>
  )
}

export default AddRecipientPage
