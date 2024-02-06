import React from 'react'
import Color from "./navbar.module.css"
const Menu = () => {
  return (
    <div className={Color.menuBlock}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </div>
  )
}

export default Menu
