const route = require('express').Router()
const models = require('../models')
const passport = require('../mypassport.js')

route.get('/', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = route;