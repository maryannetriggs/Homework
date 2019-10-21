const Character = require('../models/Character')
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/User')

mongoose.connect(dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'mat',
            email: 'mat@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'mark',
            email: 'mark@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })
      .then(users => {
        return Character.create([
          {
            name: 'Dennis the Menace',
            gender: 'male',
            firstIssue: 452,
            pets: ['Gnasher', 'Gnipper', 'Rasher', 'Dasher'],
            traits: ['Greedy', 'Heroic', 'Inventive'],
            image: '/images/dennis-the-menace.jpg',
            user: users[0]
          },
          {
            name: 'Minnie the Minx',
            gender: 'female',
            firstIssue: 596,
            pets: ['Chester'],
            traits: ['Mischievious', 'Hyperactive', 'Inventive'],
            image: '/images/minnie-the-minx.jpg',
            user: users[1]
          },
          {
            name: 'Roger the Dodger',
            gender: 'male',
            firstIssue: 561,
            pets: ['Joe the Crow', 'Dodge Cat'],
            traits: ['Crafty', 'Smartly Dressed'],
            image: '/images/roger-the-dodger.jpg',
            user: users[0]
          },
          {
            name: 'Billy Whizz',
            gender: 'male',
            firstIssue: 1139,
            traits: ['Impatient', 'Fast'],
            image: '/images/billy-whizz.jpeg',
            user: users[1]
          },
          {
            name: 'Bananaman',
            gender: 'male',
            firstIssue: 3618,
            pets: ['Crow'],
            traits: ['Stupid', 'Strong', 'Naive'],
            image: '/images/bananaman.jpeg',
            user: users[0]
          },
          {
            name: 'Ivy the Terrible',
            gender: 'female',
            firstIssue: 2233,
            traits: ['Strong', 'Determined', 'Malicious'],
            image: '/images/ivy-the-terrible.jpg',
            user: users[1]
          },
          {
            name: 'Les Pretend',
            gender: 'male',
            firstIssue: 2493,
            pets: ['Chester'],
            traits: ['Imaginative', 'Funny'],
            image: 'images/les-pretend.jpg',
            user: users[0]
          },
          {
            name: 'Walter the Softy',
            gender: 'male',
            firstIssue: 577,
            pets: ['Foo Foo'],
            traits: ['Intelligent', 'Calm', 'Spoilt'],
            image: 'images/walter-the-softy.jpeg',
            user: users[1]
          },
          {
            name: 'Little Plum',
            gender: 'male',
            firstIssue: 586,
            pets: ['Treaclefoot'],
            traits: ['Cheeky', 'Cute'],
            image: 'images/little-plum.jpeg',
            user: users[0]
          }
        ]
        )
      })
      .then(characters => console.log(`${characters.length} Characters successfully created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)