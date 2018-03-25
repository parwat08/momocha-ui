import React, { Component } from "react";
import SignUpMutation from "../mutations/SignUpMutation";

class CreateUser extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
            type="text"
            placeholder="The first name of the user"
          />
          <input
            className="mb2"
            value={this.state.url}
            onChange={e => this.setState({ lastName: e.target.value })}
            type="text"
            placeholder="The last name of user"
          />
        </div>
        <div className="button" onClick={() => this._createUser()}>
          submit
        </div>
      </div>
    );
  }

  _createUser = () => {
    const { firstName, lastName } = this.state;
    SignUpMutation(firstName, lastName, function() {
      console.log("Mutation completed");
    });
  };
}

export default CreateUser;
