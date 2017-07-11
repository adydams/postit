const user = require('../models').group;

module.exports = {
      create(req, res) {
     return group
      .create({
        name: req.body.name,
        description: req.body.description,
        
      })
      .then(user => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
};