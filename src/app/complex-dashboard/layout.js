"use client"
import React from "react"

const ComplexDashboardLayout = ({ children, user, notification, analytics }) => {
  return (
    <div>
      {children}
      <div>{user}</div>
      <div>{notification}</div>
      <div>{analytics}</div>
    </div>
  )
}

export default ComplexDashboardLayout