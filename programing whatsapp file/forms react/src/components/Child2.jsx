// import React, { useContext } from 'react'
// import { GlobalApiProvider } from '../GlobalContextApi'

// const Child2 = () => {
//     const data=useContext(GlobalApiProvider)
//   return (
//     <div>
//      <h1>Child 2</h1>
//      {
//         [...data].map(user=>{
//             return(
//                 <>
//                 <img src={user.avatar_url} alt="" />
//                 </>
//             )
//         })
//      }
//     </div>
//   )
// }

// export default Child2


import React, { useContext } from 'react'
import { GlobalProvider } from '../GlobalContextApi';

const Child2 = () => {
  const data=useContext(GlobalProvider);
  console.log(data)
  return (
    <div>
      Child2
      <h1>{data}</h1>
    </div>
  )
}

export default Child2
