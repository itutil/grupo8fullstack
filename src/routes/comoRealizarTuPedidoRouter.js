const express = require('express');
const router = express.Router();
const comoRealizarTuPedidoController = require('../controllers/comoRealizarTuPedidoController');


router.get('/', comoRealizarTuPedidoController.index);
router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/stores');
})


module.exports=router;