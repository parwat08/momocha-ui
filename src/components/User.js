import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

class User extends Component {
  render() {
    return (
      <div>
        {this.props.viewer.user.edges.map(node => (
          <div key={node.node.id}>
            {node.node.firstName} {node.node.lastName}
          </div>
        ))}
      </div>
    )
  }
}

// export default UserList;
// fragment naming convent is fragment COMPONENT-NAME_PROP-TYPE

export default createFragmentContainer(
  User,
  graphql`
    fragment User_viewer on Viewer {
      user(last: 10) @connection(key: "User_user") {
        edges {
          node {
            id
            firstName
            lastName
          }
        }
      }
    }
  `
);
