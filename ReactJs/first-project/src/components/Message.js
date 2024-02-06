import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello welcome"
      }
    }

   
    changeMessage(){
    this.setState({
        message:"Thankyou for subscribe"
    })
   }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>{this.changeMessage()}}>click</button>
      </div>
    )
  }
}

export default Message
