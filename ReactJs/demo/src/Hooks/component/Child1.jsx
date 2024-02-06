import React, { useContext } from 'react'
import { GlobalApiProvider } from '../useeffect/GlobalContext'
import Child2 from './Child2';

// const Child1 = () => {
//     const data=useContext(GlobalApiProvider)
//     console.log(data)
//   return (
//     <div>
//         <h1>hello</h1>
//         {
//             [...data].map(val=>{
//                 return(
//                     <>
//                         {/* <h1>{val.login}</h1> */}
//                         <img src={val.avatar_url} alt="" />
//                         <img src={val.avatar_url} alt="" />

//                     </>
//                 )
//             })
//         }
      
//     </div>
//   )
// }
import React from 'react'
const data=useContext(GlobalApiProvider)
const Child1 = () => {
  return (
    <div>
      <Child2/>
    </div>
  )
}

export default Child1

