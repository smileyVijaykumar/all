import React, { Component } from 'react'
import Login from './Login'
import Profile from './Profile'

export default class Menu extends Component {
  render() {
    return (
      <div className='menuBlock'>
       <ul>
        <li><a href="#"><Login/></a></li>
        <li><a href="#"><Profile/></a></li>
       </ul>
      </div>
    )
  }
}
