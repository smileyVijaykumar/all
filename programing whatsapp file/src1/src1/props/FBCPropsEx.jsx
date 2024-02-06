import React from 'react'

const FBCPropsEx = (props) => {
    console.log(props)
    // let{username,age,company,desig}=props
    let handleClick=()=>{
        console.log(props.sendFun())
    }
  return (
    <div>
       {/* <h1> {props.username}</h1>
        <h1>{props.age}</h1>
        <h1>{props.company}</h1>
        <h1>{props.desig}</h1> */}
        {/* <h1> {username}</h1>
        <h1>{age}</h1>
        <h1>{company}</h1>
        <h1>{desig}</h1> */}

        {/* <h1>{props.obj.name}</h1> */}
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FBCPropsEx
