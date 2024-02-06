import React, { Component } from 'react'

class ClassClick extends Component {
    handler=()=>{
        console.log("clicked me")
    }
  render() {
    return (
      <div>
        <button onClick={this.handler}>click me</button>
      </div>
    )
  }
}

export default ClassClick
