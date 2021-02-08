const mongoose = require("mongoose")

const connect = async () => {
  const url = 
    `mongodb://${process.env.DB_USER ? `${process.env.DB_USER}:${process.env.DB_PASS}@` : ``}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log(`Successfull connected to ${ url }`))
  } catch (error) {
    console.log(`An error ocurred when trying to connect with ${ url }`)
    throw error
  }
}

module.exports = connect