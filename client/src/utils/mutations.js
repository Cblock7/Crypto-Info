import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COIN = gql`
 mutation addCoin($name: String!) {
   addCoin(name: $name) 
 }
`;

// export const REMOVE_USER = gql`
//  mutation removeUser () {

//  }
// `;

// export const REMOVE_COIN = gql`
//  mutation removeCoin () {

//  }
// `;
