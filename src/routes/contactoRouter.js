const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');


router.get('/', contactoController.index);
router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/contacto');
})


module.exports=router;