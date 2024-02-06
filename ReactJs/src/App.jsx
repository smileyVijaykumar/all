import React, { Suspense, useState } from "react";
import PropsChildrenFBC from "./defaultprops/PropsChildrenFBC";

import Child2 from "./propsdrilling/Child2";
import Navbar from "./Router/auth/Navbar";
import Home from "./Router/auth/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// import Service from "./Router/auth/Service";

import Profile from "./Router/auth/Profile";
import About from "./Router/auth/About";
import Login from "./Router/auth/Login";
import MyAccount from "./Router/auth/MyAccount";
import { ToastContainer } from "react-toastify";
import UserHome from "./components/UserHome";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import UserDetails from "./components/UserDetails";
const Service = React.lazy(() => import("./Router/auth/Service"));

// import Child1 from "./propsdrilling/Child1";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "vijay",
//     };
//   }
//   render() {
//     return (
//       <>
//         <h1>{this.state.userName}</h1>
//         <h1>Class Based Component</h1>;
//       </>
//     );
//   }
// }
// export default App;

// function App() {
//   return <h1>Functional Based Component</h1>;
// }
// export default App;

const App = () => {
  // const [initalname, setame] = useState("vijay");
  // console.log(initalname);
  return (
    <>
      {/* <h1>Functional Bassed Component</h1> */}
      {/* <PropsChildrenFBC userName={20} company="TCS" />
      <hr />
      <PropsChildrenFBC salary="25000" desig="Tester" /> */}

      {/* <Child1 /> */}

      {/* <Child2 /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Profile" element={<Profile />}>
              <Route path="/Profile/MyAccount" element={<MyAccount />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense> */}

      <BrowserRouter>
        <ToastContainer>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/create" element={<UserCreate />} />
            <Route path="/edit" element={<UserEdit />} />
            <Route path="/details" element={<UserDetails />} />
          </Routes>
        </ToastContainer>
      </BrowserRouter>
    </>
  );
};
export default App;
