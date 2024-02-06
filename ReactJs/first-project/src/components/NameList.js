import React from 'react'

function NameList() {
    const names=["haresh","sarath","vishnu"];

    //!3r way 
    const NameList=names.map(name=> <h2>{name}</h2>)
  return (
    <div>

        {/* //! 1st way */}
        {/* <h2> {names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {/* // !2nd way */}
        {/* {
            names.map(name => <h2>{name}</h2> )

        } */}

        {/*3r way  */}

        
        {/* {NameList} */}

     
  
      
    </div>
  )
}

export default NameList
