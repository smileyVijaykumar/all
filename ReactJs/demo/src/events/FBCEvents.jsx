import { isClickableInput } from '@testing-library/user-event/dist/utils'
import React from 'react'

const FBCEvents = () => {
    //!arrow function
//    let handleClick=()=>{
//         console.log("clicked")
//     }
  //!Normal function
// function handleClick(){
//     console.log("clicked")
// }
  return (
    <div>
      {/* <button onClick={handleClick}>click</button> */}
      {/* <button onClick={handleClick}>click</button> */}
      {/* //!directly apply */}


      <button onClick={_=>{(console.log("clicked"))}}>click</button>
      
    </div>
  )
}

export default FBCEvents
