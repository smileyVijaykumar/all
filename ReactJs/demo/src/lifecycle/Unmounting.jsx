import React, { Component } from 'react'

export default class Unmounting extends Component {

    state={
        display:true
    }

    deleteComponent=()=>{
        this.setState({display:!this.state.display})
    }

  render() {
    let comp;
    if (this.state.display==true) {
        comp=<Child/>
    }
    return (
       
      <div>
        <h1 style={{color:"red", textDecoration:"underline"}}>Unmounting</h1>
        {comp}
        <button onClick={this.deleteComponent}>Remove Component</button>
      </div>
    )
  }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert("Are you sure to delete")
    }

    render(){
        return(
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}


