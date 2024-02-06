import React, { Component } from 'react'

 class Menu extends Component {
  render() {
    return (
      <div className='menuBlock'>
        <ul>
            <li><a href="#Login">Login</a></li>
            <li><a href="#profile">Profile</a></li>
        </ul>
      </div>
    )
  }
}

export default Menu
