const models = require('../models')
const user = models.users

const logoutController = {
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

module.exports = logoutController;