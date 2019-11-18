const express = require('express');
const Router = express.Router();

Router.get('/',function(req,res){
    res.render('index');
})

Router.get('/events',function(req,res){
    res.render('events');
})

Router.get('/notfound',function(req,res){
    res.render('notfound');
})

module.exports = Router;