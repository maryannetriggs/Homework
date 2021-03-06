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
  gender: { type: String, required: true, enum: ['male', 'female', 'mixed'] },
  firstIssue: { type: Number, required: true, min: 1 },
  pets: { type: [String] },
  traits: { type: [String], required: true },
  image: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: { type: [commentsSchema] }
})

characterSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Character', characterSchema)