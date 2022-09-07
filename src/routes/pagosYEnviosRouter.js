const express = require('express');
const router = express.Router();
const pagosYEnviosController = require('../controllers/pagosYEnviosController');


router.get('/', pagosYEnviosController.index);


module.exports=router;