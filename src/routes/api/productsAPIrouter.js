const express = require('express');
const router = express.Router();
const path = require('path');
const productsAPIController = require(path.resolve('src/controllers/api/productsAPIController.js'));

router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.detail);
router.post('/create', productsAPIController.create);
router.put('/update/:id', productsAPIController.update);
router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;