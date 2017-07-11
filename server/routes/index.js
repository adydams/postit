const userController = require('../controllers').user;

//get route handler for user
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

 app.post('/api/user/signup', userController.signup);
 
};