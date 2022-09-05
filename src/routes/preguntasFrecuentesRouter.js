const express = require('express');
const router = express.Router();
const comoRealizarTuPedidoController = require('../controllers/comoRealizarTuPedidoController');


router.get('/', comoRealizarTuPedidoController.index);


module.exports=router;