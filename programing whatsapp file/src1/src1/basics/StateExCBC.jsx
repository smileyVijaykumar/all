import React, { Component } from 'react'

export default class StateExCBC extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         userName:"Harish"
            // num:1000
            // arr:[1,2,3,4,5]
    //     }
    // }
  state={
    userName:"Harish"
  }
  render() {
    return (
      <div>
        <h1>CBC State</h1>
        <h1>{this.state.userName}</h1>
        {/* <h1>{this.state.num}</h1> */}
        {/* <h1>
            {this.state.arr.map(val=>{
                return(
                    <li>{val}</li>
                )
            })}
        </h1> */}
      </div>
    )
  }
}
