const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
  text: { type: String, required: true, max: 150 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},
{
  timestamps: true
})

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  firstIssue: { type: Number, required: true, min: 1 },
  pets: { type: [String] },
  traits: { type: [String], required: true },
  image: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: { type: [commentsSchema] }
})

module.exports = mongoose.model('Character', characterSchema)