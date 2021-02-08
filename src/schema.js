const { gql } = require("apollo-server")
const merge = require("lodash.merge")

const helloDefs = require("./types/hello")
const worldDefs = require("./types/world")
const userDefs = require("./types/users")
const authDefs = require("./types/auth")

const helloResolvers = require("./resolvers/hello")
const worldResolvers = require("./resolvers/world")
const userResolvers = require("./resolvers/user")
const authResolvers = require("./resolvers/auth")

const baseTypeDefs = gql`
  type Query
`

module.exports = {
  typeDefs: [baseTypeDefs, helloDefs, worldDefs, userDefs, authDefs],
  resolvers: merge({}, helloResolvers, worldResolvers, userResolvers, authResolvers)
}