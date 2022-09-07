const route = require('express').Router()
const models = require('../models')
const User = models.users
const loggedUserController = require('../controllers/loggedUserController');

route.get('/', loggedUserController.logged);

module.exports = route;



