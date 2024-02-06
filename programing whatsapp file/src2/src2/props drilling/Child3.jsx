import React from 'react'

const Child3 = (props) => {
    console.log(props)
  return (
    <div>
      Child3
      <h1>{props.name}</h1>
    </div>
  )
}

export default Child3
