const group = require('../models').group;
const user = require('../models').user;
const message = require('../models').message;
const group_Id = group.id;

module.exports = {
    createGroup(req, res){
        return group
        .create({
            name:req.body.name,
            description: req.body.description,
        })
        .then(newGroup => res.status(201).send({message: newGroup.name+' group successfully created'}))
        .catch(error => res.status(400).send(error.message));
    },

    addUserToGroup(req, res){
        return user
            .create({
                user: req.body.user,
                group: req.body.name
            })
            .then(newGroupUser => res.status(201).send(newGroupUser))
            .catch(newGroupUser => res.status(400).send(error));  
    },
};
