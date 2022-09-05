/* Import external modules */

const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { body, checkSchema, check, validationResult } = require('express-validator');

/* Import internal modules */

const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const contactoRouter = require('./routes/contactoRouter');
const storesRouter = require('./routes/storesRouter');
const staffRouter = require('./routes/staffRouter');
const comoRealizarTuPedidoRouter = require('./routes/comoRealizarTuPedidoRouter');
const pagosYEnviosRouter = require('./routes/pagosYEnviosRouter');
const terminosYCondicionesRouter = require('./routes/terminosYCondicionesRouter');
const preguntasFrecuentesRouter = require('./routes/preguntasFrecuentesRouter');


/* Define application variables */

const app = express ();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


/* Define registration schema */

const registrationSchema = {
    username: {
        custom: {
            options: value => {
                return User.find({
                    username: value
                }).then(user => {
                    if (user.length > 0) {
                        return Promise.reject('Username already in use')
                    }
                })
            }
        }
    },
    gender: {
        notEmpty: true,
        errorMessage: "Gender field cannot be empty"
    },
    password: {
        isStrongPassword: {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
        },
        errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
    },
    phone: {
        notEmpty: true,
        errorMessage: "Phone number cannot be empty"
    },
    email: {
        normalizeEmail: true,
        custom: {
            options: value => {
                return User.find({
                    email: value
                }).then(user => {
                    if (user.length > 0) {
                        return Promise.reject('Email address already taken')
                    }
                })
            }
        }
    }
};

/* Define application paths for requests */

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

app.post('/register', urlencodedParser, [
    check('username', 'This username must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()
], (req, res)=> {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }
})

app.get('/cart', (req, res)=>{
    res.render('cart')
})


/* Define paths configuration */

app.use(express.static('public'));
app.use('/', mainRouter);
app.use('/product', productRouter);
app.use('/producto', productRouter);
app.use('/contacto', contactoRouter);
app.use('/stores', storesRouter);
app.use('/staff', staffRouter);
app.use('/pagosYEnvios', pagosYEnviosRouter);
app.use('/preguntasFrecuentes', preguntasFrecuentesRouter);
app.use('/terminosYCondiciones', terminosYCondicionesRouter);
app.use('/comoRealizarTuPedido', comoRealizarTuPedidoRouter);


/* Let application start listeting requests */

app.listen(3002, ()=> {console.log('Servidor arriba en el puerto 3002')});