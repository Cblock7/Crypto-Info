import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users {
    _id
    userName
    email
    password
    coins
  }
`;

export const QUERY_COIN = gql`
  query coins {
    _id
    name
  }
`;
