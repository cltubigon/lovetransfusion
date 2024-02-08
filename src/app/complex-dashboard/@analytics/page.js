'use client'
import React from 'react'

const AnalyticsPage = () => {
    const getRandomNumber = (count) => {
        return Math.floor(Math.random() * count)
      }
      const count = getRandomNumber(2)
      if (count === 1) {
        throw new Error('Analytics page error')
      }
  return (
    <div>
      <h3>Analytics page</h3>
    </div>
  )
}

export default AnalyticsPage
