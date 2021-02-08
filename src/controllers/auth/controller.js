const bcrypt = require("bcrypt")

const { encode } = require("../../core/jwt")
const UserModel = require("../../models/users/model")

const LoginUser = async ({ email, password }) => {
  const user = await UserModel.findOne({ email, status: "active" })
  .limit(1)
  .then(data => data)
  .catch(error => {
    throw error
  })

  if (user) {
    const match = bcrypt.compareSync(password, user.password)

    if (match) {
      return {
        token: encode(user)
      }
    } else {
      throw new Error('invalid password')
    }
  }

  throw new Error('user not found')
}

module.exports = {
  LoginUser
}