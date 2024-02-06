// import React, { useState } from 'react'
import React, { useState } from 'react'

const StateExFBC = () => {
// const [state,setState]=useState("vijay")
// const[state,setState]=useState([1,2,3,4])
const[state,setState]=useState({name:"vijay"})
console.log(state)
  return (
    <div>
      {/* {state} */}
      {/* {state.map(val=>{
        return <li>{val}</li> */}
            
        
      {/* })} */}
      <h1>{state.name}</h1>
    </div>
  )
}

export default StateExFBC
