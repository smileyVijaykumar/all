import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const {name,heroName}=this.props
    return (
      <div>
        <h1>{name} aka {heroName}</h1>
      </div>
    )
  }
}

export default Welcome
