const group = require('../models/index').group;
const message = require('../models').message;

module.exports = {
    createGroup(req, res){
        const name = req.body.name;
        const userId = req.sessions.user.id;
        if(!name){
            return res.status(400).send({error: "Please put a title"})
        }
        group.create({
            name : req.body.name
        })
        .then((group) => {
            group.addUser(userId);
            res.status(201).send(group);
        }).catch(error => res.status(400).send(error));
    },
    addUserToGroup(req, res){
        
        const username = req.body.username;
        const groupId = req.params.groupId;
        if(!username){
            return res.status(400).send({error: "There is no username"})
        }
        Group.findById(groupId)
        .then(group => 
        {
            if(!group){
                return res.status(400).send({message: "There is no group"})
            }
            User.findOne({
                where:{
                    username: req.body.username,
                }
            })
            .then(user => {
                if(!user){
                    return res.status(400).send({message: "No user"})
                }
                group.addUser(user.id)
                return res.status(200).send({})
            })        
        })       
        
       
    }
};
