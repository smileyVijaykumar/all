import React, { Component } from 'react'

export default class CBCPropsEx extends Component {
    handler=()=>{
         console.log(this.props.sendFunc())
    }
  render() {
    
    // console.log(this.props)
    return (
      <div>
        {/* <h1>{this.props.userName}</h1>
        <h2>{this.props.age}</h2>
        <h3>{this.props.company}</h3>
        <h4>{this.props.desig}</h4> */}
        {/* {this.props.arr.map(val =>{
           return <h1>{val}</h1>
        })} */}

        {/* <h1>{this.props.obj.name}</h1>
        <h1>{this.props.obj.age}</h1> */}

        <button onClick={this.handler}>click</button>

      </div>
    )
  }
}
