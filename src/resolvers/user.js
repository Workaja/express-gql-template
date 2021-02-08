const { CreateUser, ListUser } = require("../controllers/users/controller")

const resolvers = {
  Query: {
    users: (_, { input }, { auth }) => ListUser({ ...input}, { auth })
  },
  Mutation: {
    createUser: (_, { input }, { auth }) => CreateUser({ ...input}, { auth })
  }
}

module.exports = resolvers