import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({count:1000})
    //     },5000)
    // }

    shouldComponentUpdate(){
        return true
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    getSnapshotBeforeUpdate(prvProps,prevState){
        console.log(prevState)
        return null
    }
    componentDidUpdate(prvProps,prevState,snapshot){
        console.log(prvProps,prevState,snapshot)
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>click</button>
      </div>
    )
  }
}
