const express = require ('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');

router.get('/', mainController.index);
router.get('/menu-detail', mainController.mainDetail);
/* router.get('/login', mainController.login); */
/* router.get('/register', mainController.login); */
router.get('/productos', productController.index);
router.get('/products', productController.index);

module.exports = router;