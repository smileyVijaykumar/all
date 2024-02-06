import React, { Component } from 'react'
import LandingPages from './LandingPages'
import Login from './Login'

export default class CBCconditional  extends Component {
    state={
        isLoggedIn:false
    }
    render(){
        let com;
        com=this.state.isLoggedIn?<LandingPages/> : <Login/>
        // if (this.state.isLoggedIn === true) {
        //     return(
        //         // <h1>welcome to application</h1>
        //         <LandingPages/>
        //     )
        // }else{
        //     return(
        //         <Login/>
        //         // <h1>Login</h1>
        //     )
           
        // }

        return(
            <div>
                  {com}
            </div>
          
        )
    }
}