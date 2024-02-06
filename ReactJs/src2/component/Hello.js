import React from 'react';

const Hello=()=>{
    // return(
    //     <div>
    //         <h1>hello vijay kumar</h1>
    //     </div>
    // )

    return React.createElement("div",{id:'dummy_id', className:'dummy_class'},React.createElement('h1',null,'hello vijay kumar'));
}

export default Hello;