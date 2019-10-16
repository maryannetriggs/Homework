const Character = require('../models/Character')

// Index route
function index(req, res) {
  Character
    .find()
    .then(characters => res.status(200).json(characters))
    .catch(err => console.log(err))
}

// Create route 
function create(req, res) {
  Character 
    .create(req.body)
    .then(character => res.status(201).json(character))
    .catch(err => console.log(err))
}

// Show route 
function show(req, res) {
  Character
    .findById(req.params.id)
    .then(character => {
      if (!character) return res.status(404).json({ message: '404 - Not Found' })
      res.status(200).json(character)
    })
    .catch(err => res.json(err))
}

module.exports = { // Shortcut because key and value are the same thing
  index,
  create,
  show
}