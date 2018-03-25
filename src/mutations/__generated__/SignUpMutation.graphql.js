/**
 * @flow
 * @relayHash 5b36b36a56f3369357475c3284de690a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpMutationVariables = {|
  input: {
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
|};
*/


/*
mutation SignUpMutation(
  $input: SignUpInput!
) {
  signup(input: $input) {
    msg
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignUpInput!",
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
        "variableName": "input",
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
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SignUpMutation",
  "id": null,
  "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signup(input: $input) {\n    msg\n    clientMutationId\n  }\n}\n",
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
(node/*: any*/).hash = '3785b3ad54c985ad3fe9a91a6b8dfa5c';
module.exports = node;
