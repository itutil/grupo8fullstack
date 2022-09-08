const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer')
const { body } = require('express-validator');

const productController = require('../controllers/productController');

const validations = [
    body('tradeMark')
        .isString().withMessage('Marca: Solamente admite letras')
        .notEmpty().withMessage('Marca: No admite estar vacio'),
    body('model')
        .isString().withMessage('Model: Solamente admite letras')
        .notEmpty().withMessage('Model: No admite estar vacio'),
    body('details')
        .isString().withMessage('Deteils: Solamente admite letras')
        .notEmpty().withMessage('Deteils: No admite estar vacio'),
    body('stock')
        .isInt().withMessage('Stock: Solamente admite numeros')
        .notEmpty().withMessage('Stock: No admite estar vacio'),
    body('fechaManofactura')
        .notEmpty().withMessage('Fecha Manofactura: No admite estar vacio'),
    body('price')
        .notEmpty().withMessage('Price: No admite estar vacio'),
    body('category')
        .isInt().withMessage('Category: Solamente admite numeros')
        .notEmpty().withMessage('Category: No admite estar vacio')
];

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/create', upload.single('pic'), validations, productController.store);
router.get('/update/:id', productController.update);
router.put('/update/:id', upload.single('pic'), validations, productController.change);
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);
router.get('/banned', productController.banned);
router.get('/admin', productController.admin);

router.get('/:id', productController.detail);
router.get('/brand/:name', productController.brand);
router.get('/category/:id', productController.category)


module.exports = router;  

