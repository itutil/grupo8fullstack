const express = require('express');
const app = express ();
const path = require('path');
const mainRouter = require('./routes/mainRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.use(express.static('public'));
app.use('/', mainRouter)

app.listen(3000, ()=>{ comsole.log('Servidor arriba en el puerto 3000');})
