const route = require('express').Router()
const models = require('../models');
const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);      // generate salt to hash password

const signupController = {
    index: async (req, res) => {
        if (!req.body.firstName) {
          return res.send("Cannot create user with no first name")
        }
        if (!req.body.lastName) {
          return res.send("Cannot create user with no last name")
        }
        if (!req.body.eMail) {
          return res.send("Cannot create  user without e-mail address")
        }
        if (!req.body.password) {
          return res.send("Cannot create  user without password")
        }
        const password_enc = bcrypt.hashSync(req.body.password, 10)
      models.users.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
      //    userRole_id: req.body.userRole_id, (defaults to 1 - user)
          eMail: req.body.eMail,
          image: req.body.image,
          province: req.body.province,
          address: req.body.address,
          poc: req.body.poc,
          city: req.body.city,
          password: password_enc,
        }).then((newuser) => {
         // and then, we return to home       
           res.redirect('/')
         //    res.redirect('/signin')
        }).catch((err) => {
          res.send(
            `Error in creating user
            ${err.message}
            `
          )
        })
      
      }
}

module.exports = signupController;