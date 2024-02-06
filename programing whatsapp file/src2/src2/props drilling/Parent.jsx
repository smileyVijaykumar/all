import React from 'react'
import Child1 from './Child1'

const Parent = (props) => {
    console.log(props);

  return (
    <div>
      Parent
      {/* <h1>{props.username}</h1> */}
      <hr/>
      <Child1 username={props.username}/>
    </div>
  )
}

export default Parent
