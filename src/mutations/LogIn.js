import { commitMutation, graphql } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
  mutation LogInMutation($input: LogInInput!) {
    login(input: $input) {
      token
      user {
        id
      }
    }
  }
`;

export default (email, password, callback) => {
  const variables = {
    input: {
      email: {
        email,
        password
      },
      clientMutationId: ""
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      const id = response.login.user.id;
      const token = response.login.token;
      callback(id, token);
    },
    onError: err => console.error(err)
  });
};
