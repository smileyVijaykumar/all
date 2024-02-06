import React from 'react'
import Person from './Person'

function PersonList() {
    const persons=[
        {
            id:1,
            name:"vijay",
            age:24,
            skill:"React"
        },
        {
            id:2,
            name:"vinoth",
            age:24,
            skill:"Angular"
        },
        {
            id:3,
            name:"pavan",
            age:24,
            skill:"dot net "
        }
    ]
 const PersonList= persons.map(person =>
    <Person key={person.id}  person={person} />
  
    
    
    
 )
 return (<div>{PersonList}</div>)
}

export default PersonList
