const { gql } = require("apollo-server")

const typeDefs = gql`
  extend type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

module.exports = typeDefs