import React, { useState } from 'react'

const StateExFBC = () => {
    // const[state,setState]=useState("Harish")
    // const[state,setState]=useState({name:"Harish"})
    const[state,setState]=useState([1,2,3,4])
    console.log(state)
  return (
    <div>
      {/* <h1>{state.name}</h1> */}
      <h1>
        {state.map(val=>{
            return <li>{val}</li>
        })}
      </h1>
    </div>
  )
}

export default StateExFBC
