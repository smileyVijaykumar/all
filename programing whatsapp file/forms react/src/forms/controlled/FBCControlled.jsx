import React, { useState } from 'react'
// import React, { useState } from 'react'

// const FBCControlled = () => {
//     const [state, setState] = useState({
//         username: "",
//         email: "",
//         password: ""
//     })
//     let handleSubmit = e => {
//         e.preventDefault();
//         // console.log(state.username,state.email,state.password)
//     }
//     let handleChange = e => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setState(values => ({ ...values, [name]: value }))
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     {/* <input type="text" name="username" value={state.username} onChange={(e)=>setState({username:e.target.value})}/> */}
//                     <input type="text" name="username" value={state.username} onChange={handleChange} />

//                 </div>
//                 <div>
//                     {/* <input type="email" name="email" value={state.email} onChange={(e)=>setState({email:e.target.value})}/> */}
//                     <input type="email" name="email" value={state.email} onChange={handleChange} />

//                 </div>
//                 <div>
//                     {/* <input type="password" name="password" value={state.password} onChange={(e)=>setState({password:e.target.value})}/> */}
//                     <input type="password" name="password" value={state.password} onChange={handleChange} />

//                 </div>
//                 <div><input type="submit" /></div>
//             </form>
//         </div>
//     )
// }

// export default FBCControlled




// const FBCControlled = () => {
//     const [username,setUsername]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     let handleSubmit = e => {
//         e.preventDefault();
//        console.log({username,email,password})
//     }
   
//     return (
//         <div>
         
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
//                 </div>
//                 {/* <div>
//                     <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

//                 </div>
//                 <div>
//                     <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> */}

//                 {/* </div> */}
//                 <div><input type="submit" /></div>
//             </form>
//         </div>
//     )
// }

// export default FBCControlled




import React, { useState } from 'react'

const FBCC = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let handleSubmit=e=>{
        e.preventDefault();
        console.log({username,email,password})
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>
                <div>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </div>
                <div><input type="submit" /></div>
            </form>
    </div>
  )
}

export default FBCC