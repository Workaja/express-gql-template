const mongoose = require("mongoose")

const Schema = new mongoose.Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('World', Schema)