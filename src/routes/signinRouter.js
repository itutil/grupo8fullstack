const route = require('express').Router()
const models = require('../models')
const User = models.users
const bcrypt = require("bcrypt");
const passport = require('../middleware/mypassport.js')

//route.post('/',
//    passport.authenticate(
//        'local',
//        {failureRedirect: '/'} // There would be a redirect to an error page if the user is not authenticated
//      ),
//    (req, res) => {
//      res.redirect('/products')
//    }
//  )

route.post("/", async (req, res) => {
    const body = req.body; // OK
    const user = await User.findOne({where: { eMail : req.body.eMail},});
    if (user) {
        // check user password with hashed password stored in the database
        const validPassword = bcrypt.compare(body.password,user.password);
        if (validPassword) {
          //res.status(200).json({ message: "Valid password" });
          res.status(200).redirect('/'); 
        } else {
          res.status(400).redirect('/'); // this would be an error page or another error notification
        }
      } else {
        res.status(401).redirect('/'); // this would be an error page or another error notification

      } 
  });

module.exports = route;