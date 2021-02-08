const { gql } = require("apollo-server")

const typeDefs = gql`
  type World {
    _id: ID!
    name: String
  }

  extend type Query {
    world: [World]
  }

  input CreateWorldInput {
    name: String
  }

  type Mutation {
    createWorld(input: CreateWorldInput): World
  }
`;

module.exports = typeDefs