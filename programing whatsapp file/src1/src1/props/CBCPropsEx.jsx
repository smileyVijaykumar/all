import React, { Component } from 'react'
import PropTypes from "prop-types"
// export default class CBCPropsEx extends Component {
//     handleClick=()=>{
//         console.log(this.props.sendFun())
//     }
//   render() {
//     console.log(this.props)
   
//     return (
//       <div>
        {/* CBCPropsEx */}
        {/* <h1>{this.props.username}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.company}</h1>
        <h1>{this.props.desig}</h1> */}

        {/* {this.props.arr.map(val=>{
            return <h1>{val}</h1>
        })} */}
        {/* <h1>{this.props.obj.name}</h1>
        <h1>{this.props.obj.age}</h1> */}
        {/* <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
} */}



export default class CBCPropsEx extends Component {
  render() {
    return (
      <div>
        
      {this.props.children}
       {/*<h1>{this.props.username}</h1>
      <h2>{this.props.company}</h2>
      <h2>{this.props.desig}</h2>
      <h2>{this.props.sal}</h2> */}
{/* {this.props.frontEnd.map(val=>{
  return <h1>{val}</h1>
})} */}
{/* {this.props.frontEnd && this.props.frontEnd.map(val=>{
      return (
        <h1>{val}</h1>
      )
    })}

{
  this.props.backend && this.props.backend.map(val=>{
    return(
      <h1>{val}</h1>
    )
  })
} */}

<h1>{this.props.username}</h1>
<h1>{this.props.sal}</h1>
      </div>
    )
  }
}



CBCPropsEx.defaultProps={
username:"Miller",
company:"Facebook",
desig:"Tester",
sal:"10000",
frontEnd:["html","css","js"]
}

CBCPropsEx.propTypes={
username:PropTypes.string,
sal:PropTypes.number
}
