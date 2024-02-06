import React from "react";
import Person from "./Person";


function Persons() {
  const persons = [
    {
      id: "1",
      name: "Vijay",
      age: 24,
      skill: "ReactJs",
    },
    {
      id: 2,
      name: "Vinoth",
      age: 24,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Pavan",
      age: 24,
      skill: "dot net",
    },
  ];

  const personList = persons.map((person) => 
    <Person key={person.id} person={person}></Person>
  )
  return (
    <div>
      {/* {
        person.map(person => <h2>{person.name}</h2>)
      } */}

      {personList}
    </div>
  );
}

export default Persons;
