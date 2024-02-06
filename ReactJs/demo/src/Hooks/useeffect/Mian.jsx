import React, { useEffect, useState } from 'react'

const Mian = () => {
    // let data=React.useState()
    // console.log(data[0])
    // console.log(data)
    // console.log(data[1])

    // const [state,setState]=useState("vijay")
    // console.log(state)
    // let clickHandler=()=>{
    //     setState("bharath    ")
    // }


    // const [state,setState]=useState("vijay")
    // console.log(state)

    const [users,setUsers]=useState([])
    console.log(users)

    useEffect(()=>{
        window.fetch("https://api.github.com/users")
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            setUsers(data)
        }).catch(error=>console.log(error))
    },[])


  
    // useEffect(()=>{
    //     setState("bharath")
    // })



  return (
    <div>
      {/* <h1>{state}</h1>
      <button onClick={clickHandler}>changeName</button> */}

      {/* <h1>{state}</h1> */}


{
    users.map(val=>{
        return(
            <>
               <img src={val.avatar_url}/>
            </>
         
        )
    })
}
      
    </div>
  )
}

export default Mian
