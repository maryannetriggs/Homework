const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./config/router')
const logger = require('./lib/logger')
const bodyParser = require('body-parser')
const errorHandler = require('./lib/errorHandler')
const { dbURI, port } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is Connected :)'))

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

app.listen(port, () => console.log(`All systems are go on port: ${port}`))

// Insomnia Template
// {
// 	"name": "required",
//   "gender": enum: ['male', 'female'],
//   "firstIssue": 1000,
//   "pets": ['not required', 'not required'],
//   "traits": ['required', 'required'],
//   "image": "not required",
// }