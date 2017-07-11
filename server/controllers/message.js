const user = require('../models').message;

module.exports = {
      create(req, res) {
     return message
      .create({
        text: req.body.text,
        priority: req.body.priority,
        
      })
      .then(user => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  },
};