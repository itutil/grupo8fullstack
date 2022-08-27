const route = require('express').Router()
const {Cart} = require('../models/cart.js')
route.get('/', (req, res) => {
  res.render('signup')
})


route.use('/cart', (req, res, next) => {
  if (!req.user) {
    return res.json([])
  } else {
    next()
  }
})


route.get('/cart', (req, res) => {

  Cart.findAll({
    where: {userId: req.user.id}
  }).then((cartItems) => {
    res.json(cartItems)
  })
})

route.post('/', (req, res) => {
  let usercart = req.body.usercart

  usercart = usercart.map(o => {
    o.userId = req.user.id
    return o
  })

  

  
  Promise.all(usercart.map(o => Cart.upsert(o, {fields:['users_id','products_id','totalPrice','soldQuantity']})))
    .then(resultArr => {
      res.json({status: 'successful'})
    })
    .catch((err) => {
      res.json({error: err})
    })

})

module.exports = route