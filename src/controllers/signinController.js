const models = require('../models')
const User = models.users
const bcrypt = require("bcrypt");
const passport = require('../middleware/mypassport.js')

const signinController = {
    index: async (req, res) => {
        const body = req.body; // OKvar loggedUser = req.session.inSession
        const user = await User.findOne({where: { eMail : req.body.eMail},});        
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = bcrypt.compare(body.password,user.password);
            if (validPassword) {
              //res.status(200).json({ message: "Valid password" });
              req.session.inSession = user;
              req.session.username = user.eMail;
              var loggedUser = req.session.inSession;
              res.render('index.ejs', {userName: ('Welcome ' + user.firstName + ' ' + user.lastName)});
              //res.write('Welcome back, ' + user.firstName + ' ' + user.lastName + '!');
              //res.end();
              //res.redirect('/');
              //console.log(req.session.inSession);           
              //res.render('/',{"loggedUser":req.session.inSession.firstName})
              //res.redirect('/doctor-dashboard.html',{"user":username);
              //res.status(200).redirect('/',{"loggedUser":req.session.inSession.firstName}); 
              } else {
              return res.status(400).redirect('/'); // this would be an error page or another error notification
            }
          } else {
            return res.status(401).redirect('/'); // this would be an error page or another error notification
    
          }
      },}

module.exports = signinController;