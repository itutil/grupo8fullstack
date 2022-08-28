const route = require('express').Router()
const models = require('../models')
const passport = require('../middleware/mypassport.js')

route.get('/', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = route;