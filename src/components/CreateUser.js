import React, { Component } from "react";
import SignUpMutation from "../mutations/SignUp";

class CreateUser extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Email"
          />
          <input
            className="mb2"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="password"
          />
        </div>
        <div className="button" onClick={() => this._createUser()}>
          submit
        </div>
      </div>
    );
  }

  _createUser = () => {
    const { email, password } = this.state;
    SignUpMutation(email, password, function() {
      console.log("Mutation completed");
      // this.props.history.push("/");
    });
  };
}

export default CreateUser;
