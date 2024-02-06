import React, { Component } from 'react'

export default class CBCEvents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"vijay"
      }
      //!binding Constructor
      this.changeName=this.changeName.bind(this)
    }
    
    // handleClick(){
    //     console.log("clicked.....")
    // }

    //!Arrow Function
    // changeName=()=>{
    //     this.setState({
    //         name:"haresh"
    //     })
    // }

    // !normal function

    changeName(){
        this.setState({
            name:"haresh"
        })
    }
  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick}>Click</button> */}
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.changeName}>changeName</button> */}
        {/* <button onClick={()=>{this.changeName()}}>changeName</button> */}
        <button onClick={this.changeName.bind(this)}>changeName</button>
      </div>
    )
  }
}
