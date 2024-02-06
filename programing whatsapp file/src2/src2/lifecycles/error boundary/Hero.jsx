import React from 'react'

const Hero = (props) => {
   if(props.heroName=="Joker"){
    throw new Error("Joker is  Not a Hero")
   }
  return (
    <div>
      {props.heroName}
    </div>
  )
}

export default Hero
