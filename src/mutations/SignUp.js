import { commitMutation, graphql } from "react-relay";
import environment from "../../Environment";
// 2
const mutation = graphql`
  mutation SignUpMutation(
    $signupInput: SignUpInput!
    $loginInput: LogInInput!
  ) {
    signup(input: $signupInput) {
      msg
      clientMutationId
    }

    login(input: $loginInput) {
      token
      user {
        id
      }
    }
  }
`;

// 3
export default (email, password, callback) => {
  // 4
  const variables = {
    signupInput: {
      email,
      password,
      clientMutationId: ""
    },

    loginInput: {
      email,
      password,
      clientMutationId: ""
    }
  };

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    onCompleted: response => {
      const id = response.login.user.id;
      const token = response.login.user.token;
      callback(id, token);
    },
    onError: err => console.error(err)
  });
};
