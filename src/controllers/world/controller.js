const WorldModel = require("../../models/world/model")
const checkAuth = require("../../core/auth.jwt")
const { v4: uuidv4 } = require("uuid")

const CreateWorld = async ({ name }, { auth }) => {
  // checkAuth(auth)

  return await WorldModel.create({
    name
  })
  .then(data => data)
  .catch(error => {
    throw error
  })
}

const ListWorld = async ({ limit }, { auth }) => {
  await checkAuth(auth)

  return await WorldModel.find()
  .limit(limit ? limit : 0)
  .then(data => data)
  .catch(error => {
    throw error
  })
}

module.exports = {
  CreateWorld,
  ListWorld
}