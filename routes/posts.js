//import express
const express = require ('express');
//you can have dfferent routers,you can have a post or a user router or anything else ykou want
const router = express.Router();
//to make a post
const Post = require('../models/Post');


router.get('/', (req,res)=>{
    res.send('we are on posts');
});

router.post('/', (req,res)=>{
    //we basically using the model to instantiate a new object for the post to create a new post
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    //save to the database
    post.save()
    //the exec makes it return a promise
    //.exec()
    //below just displays to the screen the data we are saving on the screen because we are using postman
    .then(data => {
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err});
    });
});

module.exports = router;