require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const schema = require("./schema")
const connect = require("./database/connect")

const server = new ApolloServer({
  ...schema,
  context: ({ req }) => {
    const auth = req.headers.authorization || ``
    return { auth }
  }
})

server.listen().then(async ({ url }) => {
  console.log(`Server ready at ${ url }`)

  await connect()
})