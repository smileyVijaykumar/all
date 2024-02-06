import React, { Component } from 'react'
import menus from './navbar.module.css'

export default class Menu extends Component {
  render() {
    return (
      <div className={menus.menuBlock}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Profile</a></li>
        </ul>
      </div>
    )
  }
}
