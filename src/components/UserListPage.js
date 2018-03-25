import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../Environment";
import User from "./User";

const UserListPageQuery = graphql`
  query UserListPageQuery {
    viewer {
      ...User_viewer
    }
  }
`;

class UserListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={UserListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <User viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default UserListPage;
