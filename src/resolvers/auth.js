const { LoginUser } = require("../controllers/auth/controller")

const resolvers = {
  Mutation: {
    login: (_, { input }) => LoginUser({ ...input})
  }
}

module.exports = resolvers