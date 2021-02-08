const { gql } = require("apollo-server")

const typeDefs = gql`
  type LoginToken {
    token: String
  }

  type LoginMessage {
    message: String
  }

  input LoginInput {
    email: String
    password: String
  }

  extend type Mutation {
    login(input: LoginInput): LoginToken
  }
`;

module.exports = typeDefs