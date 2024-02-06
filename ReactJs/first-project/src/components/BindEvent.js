import React, { Component } from 'react'

 class BindEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    //  binding class  constructor
    // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"bye bye"
    //     })
    //     console.log(this)
    // }

    clickHandler=()=>{
        this.setState(()=>({
            message:"bye bye"
        }))
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* //binding in rendering */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* rendering in arrow function */}
        {/* <button onClick={()=>{this.clickHandler()}}>Click</button> */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default BindEvent
