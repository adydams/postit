const express = require('express');


app.get('/loginPage', function(req, res){
    
res.send({type:'GET'});
})

app.post('/loginPage', function(req, res){

res.send({type:'POST'});
})

app.update('/loginPage/:id', function(req, res){

res.send({type:'UPDATE'});

})

app.put('/loginPage', function(req, res){

res.send({type:'PUT'});
})

app.delete('/loginPage', function(req, res){

res.send({type:'DELETE'});
})


app.listen(process.env.port  || 4000, function(){

    console.log('now listening');
} )



module.exports = app;
