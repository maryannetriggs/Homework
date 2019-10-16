const router = require('express').Router()
const characters = require('../controllers/characters')

router.route('/characters')
  .get(characters.index)
  .post(characters.create)

router.route('/characters/:id')
  .get(characters.show)

module.exports = router