import React, { Component } from 'react'
// import Mounting from './lifecycle/Mounting'
// import Updating from './lifecycle/Updating'
// import Unmounting from './lifecycle/Unmounting'
import Parrent from './propsdrilling/Parrent'
import CBCconditional from './conditionalrender/CBCconditional'
import FBCConditional from './conditionalrender/FBCConditional'
import ClassBasedRender from './conditionalrender/ClassBasedRender'
import ErrorBoundray from './lifecycle/error boundray/ErrorBoundray'
import Hero from './lifecycle/error boundray/Hero'
import CBCEvents from './events/CBCEvents'
import FBCEvents from './events/FBCEvents'
import Navbar from './component/navbar/Navbar'
// import Home from './component/home/home'
import Background from './component/home/Back'
import Mian from './Hooks/useeffect/Mian'
import GlobalContext from './Hooks/useeffect/GlobalContext'
import Child1 from './propsdrilling/Child1'
import Child2 from './propsdrilling/Child2'
import Main from './ref/Main'
import FBCRef from './ref/FBCRef'
import CBCControlledForm from './Form/controlled/CBCControlledForm'
import FBCControlledForm from './Form/controlled/FBCControlledForm'



export default class App extends Component {
 
  render() {
    return (
      <div>
        <Child1/>
        {/* <h1 name={this.userName}>hello </h1> */}
        {/* <Mounting points="1000"/> */}
        {/* <Updating/> */}
        {/* <Unmounting/> */}
        {/* App */}
        {/* <hr/> */}
        {/* <Parrent userName={this.state.userName}/> */}
        {/* <CBCconditional/> */}
        {/* <FBCConditional/> */}
        {/* <ClassBasedRender/> */}
        {/* <ErrorBoundray>
          <Hero heroName="Rajini"/>
        </ErrorBoundray>
        <ErrorBoundray>
          <Hero heroName="Dr.Rajkumar"/>
        </ErrorBoundray>
        <ErrorBoundray>
          <Hero heroName="Vijay"/>
        </ErrorBoundray>
        <ErrorBoundray>
          <Hero heroName="Joker"/>
        </ErrorBoundray> 
        <ErrorBoundray>
          <Hero heroName="Punithrajkumar"/>
        </ErrorBoundray> */}
        {/* <CBCEvents/> */}
        {/* <FBCEvents/> */}
        
        {/* //!navbar */}
        {/* <Navbar/>
        <Background/> */}


        
        {/* <Mian/> */}
        {/* <GlobalContext>
          <Child1/>
          <Child2/>
        </GlobalContext> */}

        {/* <Main/>
        <FBCRef/> */}

        {/* <CBCControlledForm/> */}
        <FBCControlledForm/>

        
      </div>
    )
  }
}
