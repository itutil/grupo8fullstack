const express = require ('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');
const contactController = require('../controllers/contactoController');
const contactoController = require('../controllers/contactoController');
const staffController = require('../controllers/staffController');
const storesController = require('../controllers/storesController');
const comoRealizarTuPedidoController = require('../controllers/comoRealizarTuPedidoController')
const preguntasFrecuentesController = require('../controllers/preguntasFrecuentesController');
const terminosYCondicionesController = require('../controllers/terminosYCondicionesController');
const pagosYEnviosController = require('../controllers/pagosYEnviosController');



router.get('/', mainController.index);
router.get('/menu-detail', mainController.mainDetail);
router.get('/login', mainController.login);
router.get('/register', mainController.login);
router.get('/productos', productController.index);
router.get('/products', productController.index);
router.get('/contacto', contactController.index);
router.get('/staff',staffController.index);
router.get('/stores',storesController.index);
router.get('/contacto', contactoController.index);
router.get('/como-realizar-tu-pedido',comoRealizarTuPedidoController.index);
router.get('/terminosYCondiciones',terminosYCondicionesController.index);
router.get('/preguntasFrecuentes',preguntasFrecuentesController.index);
router.get('/pagosYEnvios',pagosYEnviosController.index);


module.exports = router;