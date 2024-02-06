import React, { Component } from "react";
import Welcome from "./Welcome";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: true
    };
  }

  render() {

    //!4th approach
    
    return this.state.isLogedIn && <div>Welcome vijay</div>

    //!3rd approach
    
//    return this.state.isLogedIn ? (
//         <div>Welcome vijay</div>
//     ):(
//         <div>Welcome Guest</div>
//     )

    //!2nd approach
    // let Message
    // if (this.state.isLogedIn) {
    //     Message=<div>Welcome vijay</div>
    // } else {
    //     Message=<div>Welcome guest</div>
    // }

    // return(
    //     <div>
    //         <div>{Message}</div>
    //     </div>
    // )

    //!1st approach
    // if (this.state.isLogedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Vijay</div>
    //     </div>
    //   );
    // } else {
    //     return (
    //     <div>Welcome Guest</div>
    //     ) 
    // }
  
  }
  
}

export default UserGreeting;
