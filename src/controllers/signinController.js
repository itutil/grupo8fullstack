const models = require('../models')
const User = models.users
const bcrypt = require("bcrypt");
const passport = require('../middleware/mypassport.js')

const signinController = {
    index: async (req, res) => {
        const body = req.body; // OK
        const user = await User.findOne({where: { eMail : req.body.eMail},});
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = bcrypt.compare(body.password,user.password);
            if (validPassword) {
              //res.status(200).json({ message: "Valid password" });
              req.session.inSession = user;           
              //res.render('/',{"loggedUser":req.session.inSession.firstName})
              //res.redirect('/doctor-dashboard.html',{"user":username);
              //res.status(200).redirect('/',{"loggedUser":req.session.inSession.firstName}); 
              var loggedUser = req.session.inSession.firstName;
              res.status(200).redirect('/');
            } else {
              res.status(400).redirect('/'); // this would be an error page or another error notification
            }
          } else {
            res.status(401).redirect('/'); // this would be an error page or another error notification
    
          } 
      },}

module.exports = signinController;