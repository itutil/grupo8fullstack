const express = require('express');
const app = express ();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.use(express.static('public'));
app.use('/', mainRouter)
app.use('/product', productRouter)

app.listen(3000, ()=> {console.log('Servidor arriba en el puerto 3000');})
