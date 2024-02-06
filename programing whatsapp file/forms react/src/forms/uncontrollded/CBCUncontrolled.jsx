import React, { Component, createRef } from 'react'

export default class CBCUncontrolled extends Component {
    nameRef=createRef();
    mailRef=createRef();
    passRef=createRef();
    handleSubmit=(e)=>{
        e.preventDefault();
        let name=this.nameRef.current.value;
        let mail=this.mailRef.current.value;
        let psw=this.passRef.current.value;
        console.log({name,mail,psw})
    }
  render() {
    // console.log(this.nameRef,this.mailRef,this.passRef)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
            <input type="text" ref={this.nameRef}/>

            </div>
           <div>
           <input type="email" ref={this.mailRef}/>
           </div>
            <div>
            <input type="password" ref={this.passRef}/>
            </div>
            <div><input type="submit" /></div>
        </form>
      </div>
    )
  }
}
