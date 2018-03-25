import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserListPage from "./components/UserListPage";
import CreateUser from "../src/components/CreateUser";

class App extends Component {
  render() {
    return (
      <div>
        <UserListPage />
        <CreateUser />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
