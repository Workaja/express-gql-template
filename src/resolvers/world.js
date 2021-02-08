const { CreateWorld, ListWorld } = require("../controllers/world/controller")

const resolvers = {
  Query: {
    world: (_, { input }, { auth }) => ListWorld({ ...input}, { auth })
  },
  Mutation: {
    createWorld: (_, { input }, { auth }) => CreateWorld({ ...input}, { auth })
  }
}

module.exports = resolvers