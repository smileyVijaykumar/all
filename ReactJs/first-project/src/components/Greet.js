import React from 'react'


// function Greet({name,heroName}) {
    


function Greet(props) {
    const {name,heroName}=props
  return (
    <div>
      <h1>{name} akn {heroName}</h1>
    </div>
  )
}

export default Greet
