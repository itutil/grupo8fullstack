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

/* Define application variables */

const app = express ();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

/* Define application paths for requests */

app.get('', (req, res)=> {
    res.render('index')
})

/* Define paths configuration */

app.use(express.static('public'));
app.use('/', mainRouter);
app.use('/product', productRouter);
app.use('/producto', productRouter);


/* Let application start listeting requests */

app.listen(3000, ()=> {console.log('Servidor arriba en el puerto 3000')});