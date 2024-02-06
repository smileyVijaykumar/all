import React, { Component } from 'react'

export default class StateExCBC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  userName:"vijay"
        // num:10000
        arr:[1,2,3,4,5]
      }
    }
    
  render() {
    return (
      <div>
        <h1>Class bassed componentr approach</h1>
        {/* <h1>{this.state.userName}</h1> */}
        {/* <h1>{this.state.num}</h1> */}
        <h1>{this.state.arr.map(val=>{
            return (
                <li>{val}</li>
                );
        })}</h1>
      </div>
    )
  }
}
