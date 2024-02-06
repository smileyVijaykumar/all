import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

 class Navbar extends Component {
  render() {
    return (
      <section className='navBlock'>
        <article>
        <Logo/>
        <Menu/>
        </article>
        
      </section>
    )
  }
}

export default Navbar
