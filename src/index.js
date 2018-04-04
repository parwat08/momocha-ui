import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import UserListPage from "./components/UserListPage";
import CreateUser from "../src/components/CreateUser";
import Header from "./components/Header";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/user" component={UserListPage} />
            <Route exact path="/create" component={CreateUser} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        {/* <UserListPage />
        <CreateUser /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
