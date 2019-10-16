const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  firstIssue: { type: Number, required: true, min: 1 },
  pets: { type: [String] },
  traits: { type: [String], required: true }
})

module.exports = mongoose.model('Character', characterSchema)