import { createContext } from 'react';
// import React, { createContext, useEffect, useState } from 'react'
// export const GlobalApiProvider=createContext();
// // console.log(GlobalApiProvider)

// const GlobalContextApi=(props)=>{
//     // console.log(props)
//     const [users,setUsers]=useState([]);
//     // console.log(users)
//     useEffect(()=>{
//         window.fetch("https://api.github.com/users")
//         .then(res=>res.json()).then((data)=>{
//             // console.log(data)
//             setUsers(data)
//         })
//         .catch(error=>console.log(error))
//           },[]);
// return <GlobalApiProvider.Provider value={users}>
// {props.children}
// </GlobalApiProvider.Provider>
// }
// export default GlobalContextApi;



// export const GlobalProvider=createContext();
export let GlobalProvider=createContext();
const GlobalContextApi = (props) => {
  return <GlobalProvider.Provider value={"Harish"}>
{props.children}
  </GlobalProvider.Provider>
}

export default GlobalContextApi
