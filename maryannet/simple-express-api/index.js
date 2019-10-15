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

// Show Wizards Page
app.get('/wizards/:id', (req, res) => {
  const wizard = wizards.find(wizard => wizard.id === req.params.id)
  if (!wizard) return res.status(404).json({ message: 'not found' })
  res.status(200).json(wizard)
})

// Create Wizard Page
app.post('/wizards/new', (req, res) => {
  const newWizard = { ...req.body, id: `${wizards.length + 1}` }
  wizards = [ ...wizards, newWizard]
  res.status(201).json(newWizard)
})

// Delete Wizard Page
app.delete('/wizards/:id', (res, req) => {
  const removeWizard = { ...req.body.slice(0, i), 
    ...wizards.slice(i + 1, wizards.length) }
  wizards = [ ...wizards, removeWizard]
  res.status(204).json
})

// I know the above isn't right I just wanted to get some ideas working, osrry about the linter errors

// // Update Wizard Page
app.put('wizards/:id', (res, req) => {
  console.log(res.send)
})


app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain ' })
  res.end('404 - Not Found')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
