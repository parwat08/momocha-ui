/**
 * @flow
 * @relayHash 82661ee1ceb3cc8298810887f5d1294e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpMutationVariables = {|
  signupInput: {
    email: string,
    password: string,
    clientMutationId?: ?string,
  },
  loginInput: {
    email: string,
    password: string,
    clientMutationId?: ?string,
  },
|};
export type SignUpMutationResponse = {|
  +signup: ?{|
    +msg: ?string,
    +clientMutationId: ?string,
  |},
  +login: ?{|
    +token: ?string,
    +user: ?{|
      +id: string,
    |},
  |},
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "signupInput",
    "type": "SignUpInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "loginInput",
    "type": "LogInInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "signupInput",
        "type": "SignUpInput!"
      }
    ],
    "concreteType": "SignUpPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "msg",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "loginInput",
        "type": "LogInInput!"
      }
    ],
    "concreteType": "LogInPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SignUpMutation",
  "id": null,
  "text": "mutation SignUpMutation(\n  $signupInput: SignUpInput!\n  $loginInput: LogInInput!\n) {\n  signup(input: $signupInput) {\n    msg\n    clientMutationId\n  }\n  login(input: $loginInput) {\n    token\n    user {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '1325511528963b6757ffaf7fd092aa0b';
module.exports = node;
