const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');


router.get('/', staffController.index);
router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/staff');
})


module.exports=router;