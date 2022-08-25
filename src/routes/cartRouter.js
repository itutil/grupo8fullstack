const express = require('express');
const router = express.Router();
router.get('/:id', cartController.detail);
router.get('/pago', cartController.pago);
module.exports=router;