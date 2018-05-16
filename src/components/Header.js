import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends Component {
  render() {
    const userId = localStorage.getItem("MOMOCHA_USER_ID");

    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">This is gipal</div>
          <Link to="/user" className="ml1 no-underline black">
            users
          </Link>

          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              create
            </Link>
          </div>
        </div>
        <div className="flex flex-fixed">
          {userId ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem("MOMOCHA_USER_ID");
                localStorage.removeItem("MOMOCHA_AUTH_TOKEN");
                this.props.history.push(`/`);
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
