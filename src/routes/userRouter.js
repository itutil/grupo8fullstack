const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('C:\\Users\\RamonLopezImizcoz\\Documents\\Code\\grupo8\\grupo8fullstack\\src\\controllers\\registerController.js');
const {login} = require('C:\\Users\\RamonLopezImizcoz\\Documents\\Code\\grupo8\\grupo8fullstack\\src\\controllers\\loginController.js');
const {getUser} = require('C:\\Users\\RamonLopezImizcoz\\Documents\\Code\\grupo8\\grupo8fullstack\\src\\controllers\\getUserController.js');

router.post('/register', [
    body('firstName',"The name must be of minimum 3 characters length")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/login',[
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);

router.get('/getuser',getUser);

module.exports = router;