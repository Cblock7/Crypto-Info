const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!): User
    addSkill(UserId: ID!, skill: String!): User
    removeUser(userId: ID!): User
    removeSkill(userId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;
