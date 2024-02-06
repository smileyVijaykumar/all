import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import styles from './navbar.module.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section id={styles.nav_block}>
            <article>
            <Logo/>
            <Menu/>
            </article>
        </section>
       
      </div>
    )
  }
}
