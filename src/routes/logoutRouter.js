const route = require('express').Router()
const models = require('../models')
const User = models.users
const logoutController = require('../controllers/logoutController');

route.delete('/', logoutController.index);

module.exports = route;