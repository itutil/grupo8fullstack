const express = require('express');
const app = express ();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.use(express.static('public'));
app.use('/', mainRouter);
app.use('/product', productRouter);
app.use(methodOverride('_method'));

app.listen(3000, ()=> {console.log('Servidor arriba en el puerto 3000');})
