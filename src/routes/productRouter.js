const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController');

// An improved way to show products - for further reference
//route.get('/', (req, res) => {
//  Product.findAll()
//    .then(products => res.json(products))
//    .catch((err) => res.send(err.message))
//})

router.get('/', productController.index);
router.get('/:id', productController.detail);

// work in progress
//route.post('/', (req, res) => {
//  Product.create({
//    name: req.body.name,
//    price: req.body.price
//  })
//    .then((createdProduct) => res.json(createdProduct))
//    .catch((err) => res.send(err.message))
//})






module.exports = router;