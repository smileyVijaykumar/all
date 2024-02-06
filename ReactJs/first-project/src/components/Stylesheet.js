import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
  let className=props.heading ? 'heading':''
  return (
    
    <div>

      <h1 className={className}>hello</h1>
    </div>
  )
}

export default Stylesheet

