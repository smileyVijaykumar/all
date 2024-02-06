// import React,{Component} from 'react';

// // import ReactDOM from 'react-dom/client';
// import Greet from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello';
// import Message from './component/Message';
// import Counter from './component/Counter';
// import FunctionClick from './component/FunctionClick';
// import ClassClick from './component/ClassClick';
// import BindEvent from './component/BindEvent';
// import ParrentComponent from './component/ParrentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import PersonList from './component/PersonList';



// class App extends Component{
//     render() {
//         return (
//             //  <h1>hello vijay</h1>
            
//             <div className='App'>
//                 <PersonList />
//                 {/* <NameList /> */}
//                 {/* <UserGreeting/> */}
//                 {/* <ParrentComponent/> */}
//                 {/* <BindEvent/> */}
//                 {/* <FunctionClick/>
//                 <ClassClick/> */}
//                 {/* <Counter /> */}
//             {/* <Message/> */}
//              {/* <Greet name='haresh' heroName='real life'>
//                 <p>Hello i am children</p>
//             </Greet>
//             <Greet name='sarath' heroName='handsome guy'>
//                 <button>click</button> *
//         </Greet>*/}
//             {/* <Greet name='adhi' heroName='cute girl'/>
//             <Welcome name='haresh' heroName='real life'/> */}
//              {/*<Welcome name='sarath' heroName='handsome guy'/>
//             <Welcome name='adhi' heroName='cute girl'/>
//             <Hello/>  */}
//             </div>
//         );
//     }

// }
// export default App;


import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Class Based Component</h1>
        <img src='https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg' width={250} height={250}></img>
      </div>
    )
  }
}
