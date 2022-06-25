const bodyParser = require('body-parser');
const {body, checkSchema, validationResult} = require('express-validator');
const express = require('express');
const app = express ();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
<<<<<<< HEAD
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
}
=======
const methodOverride = require('method-override');

>>>>>>> e9e14a39f5dcf4724e78d1dd2572b972430e505a

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.use(express.static('public'));
<<<<<<< HEAD
app.use('/', mainRouter)
app.use('/product', productRouter);
app.use('/producto', productRouter);
app.post('/register', checkSchema(registrationSchema), (req, res) => {
    // Validate incoming input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    res.status(200).json({
        success: true,
        message: 'Registration successful',
    });
});
=======
app.use(methodOverride('_method'));
>>>>>>> e9e14a39f5dcf4724e78d1dd2572b972430e505a

app.listen(3000, ()=> {console.log('Servidor arriba en el puerto 3000');})
