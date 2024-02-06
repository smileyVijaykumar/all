import React, { Component } from 'react'
import nav from './navbar.module.css'

export default class Logo extends Component {
  render() {
    return (
      <div className={nav.logo}>
        <span>Q</span><span>Spider</span>
        
      </div>
    )
  }
}
