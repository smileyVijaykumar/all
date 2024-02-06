import React from 'react';
import ReactDOM from 'react-dom'

// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
 
// let element = React.createElement("div",null,React.createElement("h1",null,"header"),React.createElement("p",null,"lorem epsim dollar emit"))

// ReactDOM.render(element,document.getElementById("root"),()=>{
//   console.log("dom is conected")
// }) 
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
