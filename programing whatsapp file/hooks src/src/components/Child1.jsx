import React, { useContext } from 'react'
import { GlobalApiProvider } from '../GlobalContextApi'

const Child1 = () => {
   const data= useContext(GlobalApiProvider);
   console.log(data)
  return (
    <div>
     <h1>Child1</h1>
     {
        [...data].map(user=>{
            return(
                <>
                <h2>{user.login}</h2>
                </>
            )
        })
     }
       <hr/>
    </div>
  
  )
}

export default Child1
