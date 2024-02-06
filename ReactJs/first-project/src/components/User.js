import React, { Component } from 'react'


 class User extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    

  render() {
//     if (this.state.isLoggedIn) {
//         return(<div>welcome vijay</div>) 
//     }
//     else{
//         return(<div>Welecome Guest</div>)
//     }

let message
if (this.state.isLoggedIn) {
    message=<div>welcome vishwas</div>
} else {
    message=<div>welcome guest</div>
}

return(<div>{message}</div>)
    
  }


}

export default User
