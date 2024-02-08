import React from "react"

const Docs = ({ params }) => {
  console.log({ params })
  console.log('params.slug[1]', params.slug[1])
  return (
    <div>
      {(params.slug[0] === '3') && <h1>ID is rendered</h1>}
      {(params.slug[1] === 'ecam') && <h1>Ecam is rendered</h1>}
    </div>
  )
}

export default Docs
