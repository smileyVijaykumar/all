import React, { useRef } from 'react'

const FBCRef = () => {
    const inputRef=useRef()
    console.log(inputRef)
  return (
    <div>
      <form action="">
        <input ref={inputRef} type="text" />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default FBCRef
