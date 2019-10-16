const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

let wizards = [
  { id: '1', name: 'Harry Potter', magic: 'Good' },
  { id: '2', name: 'Voldemort', magic: 'Dark' },
  { id: '3', name: 'Newt Scamander', magic: 'Good' },
  { id: '4', name: 'Bellatrix Lestrange', magic: 'Dark' }
]

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`Request made was a: ${req.method} method to: ${req.url}`)
  next()
})

// Index Page
app.get('/wizards', (req, res) => {
  return res.status(200).json(wizards)
})

// Show Page
app.get('/wizards/:id', (req, res) => {
  const wizard = wizards.find(wizard => wizard.id === req.params.id)
  if (!wizard) return res.status(404).json({ message: 'not found' })
  res.status(200).json(wizard)
})

// Create Route Handler
app.post('/wizards/new', (req, res) => {
  const newWizard = { ...req.body, id: `${wizards.length + 1}` }
  wizards = [ ...wizards, newWizard]
  res.status(201).json(newWizard)
})

// Delete Route
app.delete('/wizards/:id', (req, res) => {
  wizards = wizards.filter(wizard => wizard.id !== req.params.id)
  return res.status(204)
})

// Update Wizard Page
app.put('wizards/:id', (req, res) => {
  wizards = wizards.map(wizard => wizard.id === req.params.id ? { ...wizard, ...req.body } : wizard ) //... = Object.assign
  const wizard = wizards.find(wizard => wizard.id === req.params.id)
  return res.status(202).json(wizard)
})

app.use((req, res) => { // Bottom of the pipe function, if nothing above matched
  res.writeHead(404, { 'Content-Type': 'text/plain ' })
  res.end('404 - Not Found')
})

app.listen(port, () => console.log(`Listening on port ${port}`)) // Required!!

// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const port = 4000

// let dogs = [
//   { id: '1', name: 'Jack', breed: 'Labrador' },
//   { id: '2', name: 'Mia', breed: 'Collie' },
//   { id: '3', name: 'Tal', breed: 'Spaniel' }
// ]

// app.use(bodyParser.json()) // we have installed a 3rd party peice of middleware
// // body parser creates a 'body' object on our 'req' object, if one is sent.

// app.use((req, res, next) => { // Custom middleware to log our incoming requests
//   console.log(`Incoming ${req.method} to ${req.url}`)
//   next() // once it's logged, we call next to allow it on its way to the route handlers
// })

// // Index route handler, 
// app.get('/dogs', (req, res) => { // listening for the GET request to '/dogs'
//   return res.status(200).json(dogs) // just return the whole dogs array in the response
// })

// // Show route handler
// app.get('/dogs/:id', (req, res) => { // listening for get wuth dogs id
//   const dog = dogs.find(dog => dog.id === req.params.id) // using array find to get the dog by its id
//   if (!dog) return res.status(404).json({ message: 'Not Found' }) // if we dont find it we send a 404 not found
//   return res.status(200).json(dog) // if we do we send back the dog
// })

// // Create route handler
// app.post('/dogs', (req, res) => {
//   const newDog = { ...req.body, id: `${dogs.length + 1}` } // req,body comes from bodyParse
//   // creating a newDog object above with the data from req.body and adding an ID
//   dogs = [...dogs, newDog] // adding this to the array of dogs
//   res.status(201).json(newDog) //sending the single newly created dog as the response
// })

// // delete route
// app.delete('/dogs/:id', (req, res) => {
//   dogs = dogs.filter(dog => dog.id !== req.params.id)
//   return res.sendStatus(204)
// })

// app.put('/dogs/:id', (req, res) => {
//   dogs = dogs.map(dog => dog.id === req.params.id ? { ...dog, ...req.body } : dog )
//   const dog = dogs.find(dog => dog.id === req.params.id)
//   return res.status(202).json(dog)
// })

// app.use((req, res) => { // Bottom of the pipe function, if nothing above matched
//   res.writeHead(404, { 'Content-Type': 'text/plain' })
//   res.end('404 not found')
// })

// app.listen(port, () => console.log(`Listening on port ${port}`))