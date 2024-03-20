// import React from 'react'

// const AccountPage = () => {
//   return (
//     <div>
//       <h1>Account page</h1>
//     </div>
//   )
// }

// export default AccountPage

import { createClient } from "@/config/supabase/supabaseServer"
import AccountForm from "./account-form"

export default async function AccountPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <AccountForm user={user} />
}
