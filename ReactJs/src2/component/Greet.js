import React from "react";


// function Greet(props){
//     console.log(props);
//     return <h1>hello vijay</h1>
// }

// ! 1st way

// const Greet=(props)=>{
//     // console.log(props);
//     return(
//        <div>
//          <h1>hello {props.name} and also known as {props.heroName}</h1>
         
//          {props.children}
//        </div>
//     )
// }
// export default Greet;

// ! 2nd way

// const Greet=({name,heroName})=>{
//   return(
//     <div>
//       <h1>hello {name} aka {heroName}</h1>
//     </div>
//   )

// }

// export default Greet



//3rd way
const Greet=(props)=>{
  const {name,heroName}=props
  return(
    <div>
      <h1>hello {name} aka {heroName}</h1>
    </div>
  )

}

export default Greet
