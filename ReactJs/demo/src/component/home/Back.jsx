import React from 'react'
import img from './adult-4402808_640.jpg'
import b from './Back.module.css'

const Background = () => {
  return (
    <div>
      <div id={b.backroundImg}>\
      <div className={b.home_content}>
         <h1><span>Mr.</span> Vijay kumar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae explicabo cumque alias porro ratione deserunt odio labore in optio, nam doloribus illum. Consequatur omnis laudantium temporibus, voluptate quos voluptatem qui?</p>
        <button>Subscribe</button>
      </div>
       
      </div>
    </div>
  )
}

export default Background
