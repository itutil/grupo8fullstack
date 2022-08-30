const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');


router.get('/', contactController.index);
router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/contacto');
})


module.exports=router;