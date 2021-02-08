const { gql } = require("apollo-server")

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    avatar: String
    role: String
    status: String
  }

  extend type Query {
    users: [World]
  }

  input CreateUserInput {
    name: String
    email: String
    avatar: String
    password: String
    role: String
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User
  }
`;

module.exports = typeDefs