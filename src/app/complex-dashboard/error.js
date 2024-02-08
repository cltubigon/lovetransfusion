"use client"
import React from 'react'

const DashboardError = ({error}) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  )
}

export default DashboardError
