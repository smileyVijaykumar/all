//!class Based component



import React, { Component } from 'react'
import Navbar from './component/Navbar';
import "./Global.css"

import StateExCBC from './basics/StateExCBC';
import StateExFBC from './basics/StateExFBC';
import CBCPropsEx from './props/CBCPropsEx';
import BasicProps from './props/BasicProps';
import FBCPropsEx from './props/FBCPropsEx';


export class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/>
       <Child/> */}
       {/* <StateExCBC/> */}
       {/* <StateExFBC/> */}
       {/* <BasicProps name="vijay" age={20}/> */}
       {/* <CBCPropsEx userName="sam" age={20} company="Google" desig="developer"/> */}
       {/* <FBCPropsEx userName="miller" age={23} company="FaceBook" desig="deveops"/> */}
       {/* <CBCPropsEx arr={[1,2,3,4,5,6]}/> */}
       {/* <CBCPropsEx obj={{name:"vijay" ,age:24 }}/> */}
       {/* <FBCPropsEx obj={{name:"vijay",age:24}}/> */}

       {/* <CBCPropsEx sendFunc={()=>{alert("hello React Js")}} /> */}
       <FBCPropsEx sendFunc={()=>{alert("hello React js")}}/>
           </div>

    )
  }
}

export default App;
