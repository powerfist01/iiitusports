const express = require('express');
const Router = express.Router();

Router.get('/',function(req,res){
    res.render('index');
})

Router.get('/events',function(req,res){
    res.render('events');
})

Router.get('/addEvents',function(req,res){
    res.render('addEvent');
})

Router.get('/gallery',function(req,res){
    res.render('gallery');
})

Router.get('/notfound',function(req,res){
    res.render('notfound');
})

Router.get('/council',function(req,res){
    res.render('council');
})

Router.post('/feedback',function(req,res){
    console.log(req.body.email);
    res.render('feedback');
})

module.exports = Router;