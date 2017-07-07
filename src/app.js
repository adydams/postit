const express = require('express');
const routes = require('./routes/api');
require('dotenv').config();
// Set up the express app
const app = express();


app.use(routes);

app.listen(process.env.port || 4000 , function(){


})



module.exports = app;
