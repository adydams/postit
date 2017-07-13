const user = require('../models/index').user;

module.exports = {
  signin(req, res) {
    return user.findOne({
      where:{
        username: req.body.username,
        password: req.body.password,
        }
      }).then(function(user){
          if(!user ){
            res.status(400).send({
              message:'Invalid username',
            })
          }if(!user.validPassword(req.body.password)) {
            res.status(400).send({
              message:'Invalid password',
            })
          } 
          
          else{
            req.user = user.username;
            res.status(200).send({
              message:'Username available',
            })
          }
        })
      },
      
  
  signup(req, res) {
    //console.log(req.body);
     return user
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        
      })
      .then(newUser => res.status(201).send(newUser))
      .catch(error => res.status(400).send(error.message));
  },
};


  