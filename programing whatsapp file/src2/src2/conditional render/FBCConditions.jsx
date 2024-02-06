// import React, { useState } from 'react'
// import LandingPage from './LandingPage';
// import Login from './Login';

// const FBCConditions = () => {
//     const[isLoggedIn,setISLoggedIn]=useState(false);
// if(isLoggedIn ==true){
//     return <LandingPage/>
// }else{
//     return <Login/>
// }
// }

// export default FBCConditions


// import React, { useState } from 'react'
// import LandingPage from './LandingPage';
// import Login from './Login';

// const FBCConditions = () => {
//     const[isLoggedIn,setIsLoggedIn]=useState(false)
//  switch (isLoggedIn) {
//     case true:
//         return <LandingPage/>
//         break;
//  case false:
//     return <Login/>
//     default:return null
//         break;
//  }
// }

// export default FBCConditions


// !list and keys
import React, { Fragment, useState } from 'react'
const FBCConditions = () => {
    const[array,setArray]=useState([1,2,3,4,5,6,7,8,9,1])
    // const arr=array.map(val=>{return val})
  return (
    <div>
      {/* <h1>{array[0]}</h1>
      <h1>{array[1]}</h1>
      <h1>{array[2]}</h1>
      <h1>{array[3]}</h1> */}
      {/* <h1>{arr}</h1> */}
      {array.map((value,index)=>{
        // console.log(index)
        return(
        //   <ul key={index}>
        //      <li>{value}</li>
        //    <li>hi</li>
        //   </ul>

    //    < >
    //      <li>{value}</li>
    //     <li>hi</li>
    //    </>
    <Fragment key={index}>
 <li>{value}</li>
       <li>hi</li>
    </Fragment>
        )
      })}
    </div>
  )
}

export default FBCConditions

