import React from 'react'

const Hero = (props) => {
    if (props.heroName==="Joker") {
        throw new Error("Joker is Not  a hero")
    }
    
  return (
    <div>
      <h1>{props.heroName}</h1>
    </div>
  )
}

export default Hero
