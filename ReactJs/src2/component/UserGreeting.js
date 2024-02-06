import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {

    //!if else condition
    // if (this.state.isLoggedIn) {
    //     return(
    //         <div>Welcome vishwas</div>
    //     )
    // } else {
    //     return(
    //         <div>Welcome guest</div>
    //     )
    // }

    //! Element variable condition

    // let Message

    // if (this.state.isLoggedIn) {
    //     Message =<div>welcome vishwas</div>
    // } else {
    //     Message=<div>welcome guest</div>
    // }
    // return <div>{Message}</div>

    //! ternary condition

    // return(
    //     this.state.isLoggedIn ?
    //     <div>welcome viswas</div> :
    //     <div>welcome Guest</div>
    // )

    //! ambracent symbol using

   return this.state.isLoggedIn && <div>Welcome vishwas</div>
    

  }
}

export default UserGreeting
