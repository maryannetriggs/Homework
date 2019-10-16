const Character = require('../models/Character')
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

mongoose.connect(dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return Character.create([
          {
            name: 'Dennis the Menace',
            gender: 'Male',
            firstIssue: 452,
            pets: ['Gnasher', 'Gnipper', 'Rasher', 'Dasher'],
            traits: ['Greedy', 'Heroic', 'Inventive']
          },
          {
            name: 'Minnie the Minx',
            gender: 'Female',
            firstIssue: 596,
            pets: ['Chester'],
            traits: ['Mischievious', 'Hyperactive', 'Inventive']
          },
          {
            name: 'Roger the Dodger',
            gender: 'Male',
            firstIssue: 561,
            pets: ['Joe the Crow', 'Dodge Cat'],
            traits: ['Crafty', 'Smartly Dressed']
          },
          {
            name: 'Billy Whizz',
            gender: 'Male',
            firstIssue: 1139,
            traits: ['Impatient', 'Fast']
          },
          {
            name: 'Bananaman',
            gender: 'Male',
            firstIssue: 3618,
            pets: ['Crow'],
            traits: ['Stupid', 'Strong', 'Naive']
          },
          {
            name: 'Ivy the Terrible',
            gender: 'Female',
            firstIssue: 2233,
            traits: ['Strong', 'Determined', 'Malicious']
          },
          {
            name: 'Les Pretend',
            gender: 'Male',
            firstIssue: 2493,
            pets: ['Chester'],
            traits: ['Imaginative', 'Funny']
          },
          {
            name: 'Walter the Softy',
            gender: 'Male',
            firstIssue: 577,
            pets: ['Foo Foo'],
            traits: ['Intelligent', 'Calm', 'Spoilt']
          },
          {
            name: 'Little Plum',
            gender: 'Male',
            firstIssue: 586,
            pets: ['Treaclefoot'],
            traits: ['Cheeky', 'Cute']
          }
        ]
        )
      })
      .then(characters => console.log(`${characters.length} Characters successfully created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)