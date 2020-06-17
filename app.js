//import express
const express = require ('express');

//execute express
const app = express();

const mongoose = require('mongoose');
//this body parser changes data for us into data our app can use
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//middleware is something that runs before hitting the routes
// app.use('/posts', ()=>{
//     console.log('this is a middleware running');
// });
//  or 
//  app.use(auth);

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req,res)=>{
    //the below means we are basically sending a response to the user which is a string
    res.send('we are on home');
});

app.get('/posts', (req,res)=>{
    res.send('we are on posts');
});



//connect to database
//to hide our password we install a dotenv file
mongoose.connect('process.env.DB_CONNECTION', { useUnifiedTopology: true, useNewUrlParser: true }, ()=>
    console.log('connected to DB')
);

//how to listen to the server
app.listen(3000);