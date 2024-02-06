import React from 'react'

function FBCPropsEx(props) {
    let handler=()=>{
        console.log(props.sendFunc())
    }
    console.log(props)
  return (
    
    <div>
      {/* <h1>{props.userName}</h1>
      <h1>{props.age}</h1>
      <h1>{props.company}</h1>
      <h1>{props.desig}</h1> */}
      {/* <h1>{props.obj.name}</h1>
      <h1>{props.obj.age}</h1> */}

      <button onClick={handler}>click</button>
    </div>
  )
}

export default FBCPropsEx
