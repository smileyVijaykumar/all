import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParrentComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            parrentName:'parrent'
        }
        this.greetParrent=this.greetParrent.bind(this)
    }

    greetParrent(childName){
        alert(`hello ${this.state.parrentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParrent}/>
      </div>
    )
  }
}

export default ParrentComponent

