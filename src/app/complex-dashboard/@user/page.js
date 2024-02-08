'use client'
import React from 'react'

const UserPage = () => {
  const getRandomNumber = (count) => {
    return Math.floor(Math.random() * count)
  }
  const count = getRandomNumber(2)
  if (count === 1) {
    throw new Error('User page error')
  }
  console.log('count', count)
  return (
    <div>
      <h3>User page</h3>
    </div>
  )
}

export default UserPage