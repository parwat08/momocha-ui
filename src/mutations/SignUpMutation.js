import { commitMutation, graphql } from "react-relay";
import environment from "../../Environment";
// 2
const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signup(input: $input) {
      msg
      clientMutationId
    }
  }
`;

// 3
export default (firstName, lastName, callback) => {
  // 4
  const variables = {
    input: {
      firstName,
      lastName,
      clientMutationId: ""
    }
  };

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    onCompleted: () => {
      callback();
    },
    onError: err => console.error(err)
  });
};
