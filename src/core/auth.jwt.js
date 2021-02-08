const { AuthenticationError } = require("apollo-server")

const { verify } = require("./jwt")

const checkAuth = async auth => {
  if (!auth) throw new AuthenticationError('you must logged in!')

  const token = auth.split('Bearer ')[1]
  if (!token) throw new AuthenticationError('you should provide a token!')

  const user = verify(auth, true)

  if (user) {
    if (user.success) return true

    throw new AuthenticationError('not authorized!')
  }

  throw new AuthenticationError('not authorized!')
}

module.exports = checkAuth