const user = require('../models/index').users;

module.exports = {
  // signin(req, res) {
  //   return user
  //     .create({
  //       username: req.body.username,
  //       password: req.body.password,
  //       email: req.body.email,
  //     })
  //     .then(user => res.status(201).send(user))
  //     .catch(error => res.status(400).send(error));
  // },
  signup(req, res) {
     return user
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
      })
      .then(newUser => res.status(201).send(newUser))
      .catch(error => res.status(400).send(error.message));
  },
};