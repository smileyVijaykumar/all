import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  // console.log(props)/
  return (
    <div>
      Child2
  
<hr/>
<Child3 name={props.name}/>
    </div>
  )
}

export default Child2
