import React from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
  // console.log(props)
  return (
    <div>
      Child1
<hr/>
<Child2 name={props.username}/>
    </div>
  )
}

export default Child1
