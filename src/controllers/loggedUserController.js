const models = require('../models')
const user = models.users

/* const logoutController = {
    index: async (req, res) => {
  const { user, cookies: { auth_token: authToken } } = req

   if (user && authToken) {
    await req.user.logout(authToken);
    return res.status(204).send()
  }

  return res.status(400).send(
    { errors: [{ message: 'not authenticated' }] }
  );
},}; 

const loggedUserController = {
  logged: async (req, res) => {
    if(loggedUser){
      res.send(loggedUser);
    }
    else{
      res.send('noUser');
    }
  }};

*/


const loggedUserController = {
  logged: async (req, res) => {

        session=req.session;
        session.userid=req.body.username;
        console.log(req.session);
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`)
}};

module.exports = loggedUserController;