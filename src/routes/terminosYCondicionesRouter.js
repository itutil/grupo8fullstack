const express = require('express');
const router = express.Router();
const terminosYCondicionesController = require('../controllers/terminosYCondicionesController');


router.get('/', terminosYCondicionesController.index);


module.exports=router;