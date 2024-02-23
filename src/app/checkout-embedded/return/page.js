'use client'
import React, { useEffect, useState } from "react"
import { redirect, useParams } from "next/navigation"

export default function Return() {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState("")
  const parameters = useParams()
  console.log({ parameters })
  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const sessionId = urlParams.get("session_id")
    console.log({ queryString, urlParams, sessionId })

    // fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setStatus(data.status)
    //     setCustomerEmail(data.customer_email)
    //   })
  }, [])

  if (status === "open") {
    return redirect("/")
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null
}
