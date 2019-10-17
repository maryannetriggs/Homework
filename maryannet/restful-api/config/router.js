const router = require('express').Router()
const characters = require('../controllers/characters')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/characters')
  .get(characters.index)
  .post(secureRoute, characters.create)

router.route('/characters/:id')
  .get(characters.show)
  .get(secureRoute, characters.update)
  .get(secureRoute, characters.remove)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/login')
  .post(users.login)

module.exports = router