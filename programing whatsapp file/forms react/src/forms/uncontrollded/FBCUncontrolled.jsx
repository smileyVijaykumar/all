import React, { useRef } from 'react'

const FBCUncontrolled = () => {
    const nameRef=useRef();
    const mailRef=useRef();
    const passRef=useRef();
    let handleSubmit=e=>{
        e.preventDefault();
        let name=nameRef.current.value;
        let mail=mailRef.current.value;
        let psw=passRef.current.value;
        console.log({name,mail,psw})
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <div>
            <input type="text" ref={nameRef}/>

            </div>
           <div>
           <input type="email" ref={mailRef}/>
           </div>
            <div>
            <input type="password" ref={passRef}/>
            </div>
            <div><input type="submit" /></div>
        </form>
    </div>
  )
}

export default FBCUncontrolled
