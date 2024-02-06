import React, { useContext } from 'react'
import { GlobalApiProvider } from '../GlobalContextApi'

const Child2 = () => {
    const data=useContext(GlobalApiProvider)
  return (
    <div>
     <h1>Child 2</h1>
     {
        [...data].map(user=>{
            return(
                <>
                <img src={user.avatar_url} alt="" />
                </>
            )
        })
     }
    </div>
  )
}

export default Child2
