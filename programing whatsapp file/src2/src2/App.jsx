import React, { Component } from 'react'
import CBCEvents from './events/CBCEvents'
import FBCEvents from './events/FBCEvents'
import Navbar from './components/navbar/Navbar'
import Home from './components/mainfolder/Home'
// import Hero from './lifecycles/error boundary/Hero'
// import ErrorBoundary from './lifecycles/error boundary/ErrorBoundary'
// import Mounting from './lifecycles/Mounting'
// import Updating from './lifecycles/Updating'
// import Unmounting from './lifecycles/Unmounting'
// import Parent from './props drilling/Parent'
// import CBCConditions from './conditional render/CBCConditions'
// import FBCConditions from './conditional render/FBCConditions'
// import Table from './conditional render/Table'

// export default class App extends Component {
  // state={
  //   username:"SAM"
  // }
  // render() {
  //   return (
  //     <div>
        {/* <Mounting num={1000}/> */}
        {/* <Updating/> */}
        {/* <Unmounting/> */}
        {/* APP */}
        {/* <hr/>
        <Parent username={this.state.username}/> */}
        {/* <CBCConditions/> */}
        {/* <FBCConditions/> */}
        {/* <Table/> */}

      {/* </div>
    )
  }
} */}

// export default class App extends Component {
//   render() {
//     return (
//      <>
//     <ErrorBoundary>
//     <Hero heroName="Rajini"/>
//     </ErrorBoundary>

//   <ErrorBoundary>
//   <Hero heroName="Dr.Rajkumar"/>
//   </ErrorBoundary>

//       <ErrorBoundary>
//       <Hero heroName="Joker"/>
//       </ErrorBoundary>

//       <ErrorBoundary>
//       <Hero heroName="Vijay"/>
//       </ErrorBoundary>

//      <ErrorBoundary>
//      <Hero heroName="Puneeth"/>
//      </ErrorBoundary>
   
//      </>
//     )
//   }
// }




const App = () => {
  return (
    <div>
      {/* <CBCEvents/>
      <FBCEvents/> */}
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
