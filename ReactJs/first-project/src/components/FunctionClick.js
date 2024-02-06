import React from 'react'

function FunctionClick() {
   let changeClick=()=>{
        console.log("clicked")
    }
  return (
    <div>
      <button onClick={changeClick}>click</button>
    </div>
  )
}

export default FunctionClick
