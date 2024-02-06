
import React, { Component } from 'react'

export default class ErrorBoundray extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error,info){
        return{
            hasError:true
        }
            
        
    }
  render() {
   
      if (this.state.hasError===true) {
        return (
        <>
        <h1 style={{color:"red"}}>SomeThing went wrong</h1>
        </>
        )
      }else{
        return this.props.children
      }
    
  }
}


