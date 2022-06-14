const express = require ('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/menu-detail', mainController.mainDetail);
router.get('/login', mainController.login);
router.get('/register', mainController.login);

module.exports = router;