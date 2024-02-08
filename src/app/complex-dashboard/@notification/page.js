'use client'
import React from 'react'

const NotificationPage = () => {
    const getRandomNumber = (count) => {
        return Math.floor(Math.random() * count)
      }
      const count = getRandomNumber(2)
      if (count === 1) {
        throw new Error('Notification page error')
      }
  return (
    <div>
      <h3>Notification page</h3>
    </div>
  )
}

export default NotificationPage