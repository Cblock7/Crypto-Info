import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COIN = gql`
  mutation addCoin($name: String!) {
    addCoin(coin: $coin) {
      coin {
        _id
        name
      }
    }
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
