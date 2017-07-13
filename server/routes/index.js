const userController = require('../controllers').user;
const groupController = require('../controllers').group;
//const sessionChecker = require('../middleware').session;

//get route handler for user
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

 app.post('/api/user/signup', userController.signup);
 app.post('/api/user/signin', userController.signin);
 app.post('/api/group/createGroup', groupController.createGroup);
 //app.post('/api/group/addUserToGroup',sessionChecker, groupController.addUserToGroup);
};