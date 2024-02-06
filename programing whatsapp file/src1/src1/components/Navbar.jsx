import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default class Navbar extends Component {
  render() {
    return (
      <section id="navBlock">
     <article>
     <Logo/>
       <Menu/>
     </article>
      </section>
    )
  }
}
