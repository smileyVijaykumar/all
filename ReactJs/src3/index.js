// import React from 'react'
// import ReactDom from 'react-dom'
// import App from './App'

// ReactDom.render(
//     <App/>,document.getElementById("root")
// )

// import React from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>hello</h1>,document.getElementById("root"),()=>{
//     console.log("react Dom is connected")
// })

import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(<App/>);
