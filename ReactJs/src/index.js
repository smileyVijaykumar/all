
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

// ReactDOM.render(<h1>hello React Js</h1>,document.getElementById('root'),()=>{
//     console.log("dom connected")
// })

// ReactDOM.createRoot(document.getElementById("root")).render(<h1>hello Reactjs</h1>)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
)