// import React, { createContext, useEffect, useState } from 'react'
// export const GlobalApiProvider=createContext();

// const GlobalContext = (props) => {
//     const[users,setUsers]=useState([])

//     useEffect=()=>{

//         window.fetch("https://api.github.com/users")
//         .then((res)=>res.json())
//         .then((data)=>{setUsers (data) })
//         .catch(error=>{console.log(error)},[])

//     }
//   return <GlobalApiProvider.Provider value={users}>
//         {props.children}
//     </GlobalApiProvider.Provider>
  
  
// }

// export default GlobalContext

import React from 'react'
import { createContext } from 'react'
export const GlobalApiProvider=createContext();

const GlobalContext=(props)=>{

  return  <GlobalApiProvider.Provider value={"vijay"}>
            {props.children}
    </GlobalApiProvider.Provider>

}
export default GlobalContext
