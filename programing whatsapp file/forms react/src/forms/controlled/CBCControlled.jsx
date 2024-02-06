import React, { Component } from "react";

export default class CBCControlled extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { username, email, password } = this.state;
    console.log({ username, email, password });
  };
  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* <input type="text" name="username" value={this.username} onChange={(e)=>this.setState({username:e.target.value})}/> */}
            <input
              type="text"
              name="username"
              value={this.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {/* <input type="email" name="email" value={this.email} onChange={(e)=>this.setState({email:e.target.value})}/> */}
            <input
              type="email"
              name="email"
              value={this.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {/* <input type="password" name="password" value={this.password} onChange={(e)=>this.setState({password:e.target.value})}/> */}
            <input
              type="password"
              name="password"
              value={this.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
