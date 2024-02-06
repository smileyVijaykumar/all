import React from 'react'

function Person({person}) {
  return (
    <div>
    <h3>
        i am {person.name} my age is {person.age} i know {person.skill} 
     </h3>
    </div>
  )
}

export default Person
