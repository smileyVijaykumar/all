import React, { Component, createRef } from 'react'

export default class  extends Component {
    demoref=createRef();
  render() {
    return (
      <div>
        <h1 ref={this.demoref}>Reference</h1>

      </div>
    )
  }
}
