import React from "react";
import Child1 from "./Child1";

const Parrent=(props)=>{
    console.log(props);

    return(
        <div>
            Parrent
            <hr/>

            <Child1 userName={props.userName} />
            {/* <h1>{props.userName}</h1> */}
            
        </div>
    )
}
export default Parrent