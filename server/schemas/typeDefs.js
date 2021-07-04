const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    coins: [Coin]
  }

  type Coin {
    _id: ID
    name: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    coins: [Coin]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(userName: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addCoin(name: String!): User
    removeUser(userId: ID!): User
    removeCoin(userId: ID!, coin: String!): User
  }
`;

module.exports = typeDefs;
