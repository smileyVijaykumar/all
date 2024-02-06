import React, { Component } from 'react'
import Lo from './Lo'
import La from './La'

export default class ClassBasedRender extends Component {
    state={
        isLoggedIn:true
    }
  render() {
  
    //   <div>
        
        if(this.state.isLoggedIn === true){
            return (
             <La/>
            )
        }
        else{
            return(
                <Lo/>
            )
        }
    //   </div>
 
  }
}
