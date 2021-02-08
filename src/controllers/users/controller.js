const bcrypt = require("bcrypt")
const UserModel = require("../../models/users/model")

const CreateUser = async ({ name, email, password, avatar, role }) => {
  return await UserModel.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    avatar,
    role,
    status: 'active'
  })
  .then(data => data)
  .catch(error => {
    throw error
  })
}

const ListUser = async ({ limit }) => {
  return await UserModel.find()
  .limit(limit ? limit : 0)
  .then(data => data)
  .catch(error => {
    throw error
  })
}

module.exports = {
  CreateUser,
  ListUser
}