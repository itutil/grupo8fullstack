/* Import external modules */

const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { body, checkSchema, check, validationResult } = require('express-validator');
const passport = require('./middleware/mypassport')
const session = require('express-session')
const timeLapse = 60;
const cors = require('cors');


/* Import internal modules */

const ensureAuthenticated = require('./middleware/routes-protector');
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const signupRouter = require('./routes/signupRouter');
const signinRouter = require('./routes/signinRouter');
const logoutRouter = require('./routes/logoutRouter');
const cartRouter = require('./routes/cartRouter');
const contactoRouter = require('./routes/contactoRouter');
const storesRouter = require('./routes/storesRouter');
const staffRouter = require('./routes/staffRouter');
const comoRealizarTuPedidoRouter = require('./routes/comoRealizarTuPedidoRouter');
const pagosYEnviosRouter = require('./routes/pagosYEnviosRouter');
const terminosYCondicionesRouter = require('./routes/terminosYCondicionesRouter');
const preguntasFrecuentesRouter = require('./routes/preguntasFrecuentesRouter');


/* Import API modules */

const apiProductsRouter = require('./routes/api/productsAPIrouter');
const apiUsersRouter = require('./routes/api/usersAPIrouter');
const categoriaRouter= require('./routes/api/categoryRouter');

/* Define application variables */

const app = express ();

/* Define paths configuration */

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'a super ultra hiper secret',
  saveUninitialized:true,
  cookie: { maxAge: timeLapse },
  resave: false, 
  secure: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
app.use(cors());
app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/productos', productRouter);
//app.use('/cart', cartRouter);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/contacto', contactoRouter);
app.use('/stores', storesRouter);
app.use('/staff', staffRouter);
app.use('/pagosYEnvios', pagosYEnviosRouter);
// app.use('/preguntasFrecuentes', preguntasFrecuentesRouter);
app.use('/terminosYCondiciones', terminosYCondicionesRouter);
app.use('/comoRealizarTuPedido', comoRealizarTuPedidoRouter);


// User interaction routes

app.use(['/signup'], signupRouter);
app.use(['/signin'], signinRouter);
app.use(['/logout'], logoutRouter);



// API interaction routes

app.use('/api/products',apiProductsRouter);
app.use('/api/users',apiUsersRouter);
app.use('/api/categoria', categoriaRouter);


// Protect product routes

app.get('/product', ensureAuthenticated, function(req, res) {
  if (ensureAuthenticated) {
    //res.status(200).json({ message: "Valid password" });
    res.status(200).redirect('/product'); 
  } else {
    res.status(400).redirect('/'); // this would be an error page or another error notification
  }
  // Do something with user via req.user
  //res.redirect('/')
});
app.get('/cart', (req, res)=>{
  res.render('cart')
})

/* Define application paths for requests */

//app.get('', (req, res)=> {
//    res.render('index')
// })

/* Let application start listeting requests */

app.listen(3000, ()=> {console.log('Servidor arriba en el puerto 3000')});