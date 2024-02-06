import React from 'react'

function NameList() {
    const names=["vijay","Hari","sarath"]
   // !3rd way
   const NameList=names.map((name)=><h1>{name}</h1>)

  return (
    <div>
      // ! 1st way
        {/* <h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1> */}

        // ! 2nd way

        {/* {names.map((e)=><h1>{e}</h1>)} */}
        <div>{NameList}</div>

     

     
      
    </div>
  )
}

export default NameList
