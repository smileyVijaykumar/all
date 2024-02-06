import React, { Component } from 'react'

class BindEvent extends Component {

  constructor(){
    super()
    this.state={
      message:"hello"
    }
    // !important
    // this.clickHandler=this.clickHandler.bind(this)
  }
  // clickHandler(){
  //   this.setState(({
  //     message:'good bye'
  //   }))

  //   console.log(this);

  // }

  //! important

  clickHandler =()=>{
    this.setState({message:'goodbye'})
  }
 
  render() {
    return (
      <div>
       <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={e=>this.clickHandler()}>click</button> */}
        <button  onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default BindEvent
