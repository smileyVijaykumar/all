import React, { Component } from 'react'
import CBCPropsEx from './props/CBCPropsEx'
import FBCPropsEx from './props/FBCPropsEx'

// !CBC
// import React from "react";
// class App extends React.Component{
//     render(){
//         return(
//             <h1>Class based component</h1>
//         )
//     }
// }
// export default App;

// import StateExCBC from "./basics/StateExCBC";
// import StateExFBC from "./basics/StateExFBC";
// import Home from "./childs/Home";
// import Navbar from "./components/Navbar";

//!FBC
// function App(){
//     return(
//         <h1>Functional baserd components</h1>
//     )
// }
// export default App;
// const App=()=>{
//     return (
//       <div>
       {/* <Navbar/>
       <Home/> */}
       {/* <StateExCBC/> */}
       {/* <StateExFBC/> */}
      {/* </div>
    )
}
export default App; */}


// !cbc props

export default class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        {/* <h1>{this.props.username}</h1>
        <h2>{this.props.sal}</h2> */}
        {/* <CBCPropsEx username="Sam" age={20} company="google" desig="devloper"/>
        <hr/>
        <FBCPropsEx username="Miller" age={20} company="facebook" desig="devops"/> */}
      {/* <CBCPropsEx arr={[1,2,3,4,5]}/> */}
      {/* <CBCPropsEx obj={{name:"Sam",age:20}}/> */}
      {/* <FBCPropsEx obj={{name:"Sam",age:20}}/> */}
      {/* <FBCPropsEx sendFun={()=>{alert("Hello React JS")}}/> */}
      {/* <CBCPropsEx sendFun={()=>{alert("Hello React JS")}}/> */}
{/* <CBCPropsEx username="Sam" company="Google">
  <h1>Class based component</h1>
</CBCPropsEx> */}
<CBCPropsEx frontEnd={["HTML","CSS","JS","REACT JS"]} backend={["Nodejs","expressJs","mongoDB"]} username="Miller" sal="30000"/>
  {/* <h1>Class based component</h1>
</CBCPropsEx> */}
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
{/* <CBCPropsEx desig="Developer" sal={30000}>
  <h1 style={{textDecoration:"underline"}}>Class based component</h1>
</CBCPropsEx> */}
{/* <CBCPropsEx  backend={["Nodejs","expressJs","mongoDB"]} /> */}
  {/* <h1 style={{textDecoration:"underline"}}>Class based component</h1>
</CBCPropsEx> */}


      </div>
    )
  }
}
