const express = require('express');
const router = express.Router();
const storesController = require('../controllers/storesController');


router.get('/', storesController.index);
router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/stores');
})


module.exports=router;