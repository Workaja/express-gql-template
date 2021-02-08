const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const Schema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    avatar: String,
    role: String,
    status: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Users', Schema)