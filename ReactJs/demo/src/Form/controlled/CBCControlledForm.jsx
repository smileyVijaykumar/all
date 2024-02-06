import React, { Component } from "react";

export default class CBCControlledForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handlesubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let { username, email, password } = this.state;
    console.log(username, email, password);
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
        <form onSubmit={this.handlesubmit}>
          <div>
            <input
              type="text"
              name="username"
              value={this.username}
              // onChange={(e) => this.setState({ username: e.target.value })}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={this.email}
              // onChange={(e) => this.setState({ email: e.target.value })}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={this.password}
              // onChange={(e) => this.setState({ password: e.target.value })}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}
