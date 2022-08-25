const express = require ('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');
const contactController = require('../controllers/contactController');
const comoRealizarTuPedidoController = require('../controllers/comoRealizarTuPedidoController')

router.get('/', mainController.index);
router.get('/menu-detail', mainController.mainDetail);
router.get('/login', mainController.login);
router.get('/register', mainController.login);
router.get('/productos', productController.index);
router.get('/products', productController.index);
router.get('/contacto', contactController.index);
router.get('/como-realizar-tu-pedido',comoRealizarTuPedidoController.index);

module.exports = router;