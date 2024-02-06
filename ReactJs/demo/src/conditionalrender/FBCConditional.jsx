import React, { useState } from 'react'

const FBCConditional = () => {
    const[array,setArray] = useState([10,20,30,40,50])
  return (
    <div>
        {/* <h1>{array[0]}</h1> */}
        {/* <h2>{array[1]}</h2> */}
      {array.map(val=>{
        return (
            <>
        <h1>{val}</h1>
        <h3>hi</h3>
        </>
        )
      })}
    </div>
  )
}

export default FBCConditional
