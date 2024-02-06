import React, { Component } from 'react'

export default class Updating extends Component {
  state={
    count:0
  }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({count:1000})
  //   },5000)
  // }
  shouldComponentUpdate(){
    return true;
  }
  increment=()=>{
    this.setState
    ({count:this.state.count+1})
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(prevState)
    return null
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log(prevProps,prevState,snapshot)
  }
  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
