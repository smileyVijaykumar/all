// import React, { useEffect, useState } from 'react'

// const Main = () => {
//     // let data=React.useState("Harish");
//     // console.log(data[0])
//     // console.log(data[1])
//     // const[state,setState]=useState("Harish");
//     // const[count,setCount]=useState(0);
//     const [users,setUsers]=useState([]);
//     console.log(users)
//     // console.log(state)
//     // let handleClick=()=>{
//     //     setState("Bharath")
//     // }
//   useEffect(()=>{
// // setState("Bharath")
// // document.title=state;
// // document.title=`count is ${count}`
// window.fetch("https://api.github.com/users")
// .then(res=>res.json()).then((data)=>{
//     // console.log(data)
//     setUsers(data)
// })
// .catch(error=>console.log(error))
//   },[]);
// //   let handleClick=()=>{
// //     setCount(count+1)
// //   }
//   return (
//     <div>
//       {/* <h1>{state}</h1> */}
//       {/* <button onClick={handleClick}>Change name</button> */}
//       {/* <h1>{count}</h1>
//       <button onClick={handleClick}>click</button> */}
//       {
//         users.map(val=>{
//             return (
//                 <>
//                 <img src={val.avatar_url}/>
//                 </>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Main

import React from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import GlobalContextApi from './GlobalContextApi'

const Main = () => {
  return (
    <GlobalContextApi>
      <Child1/>
      <Child2/>
    </GlobalContextApi>
  )
}

export default Main

