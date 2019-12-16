const express = require('express');
const Router = express.Router();


Router.get('/',function(req,res){
    res.render('index');
})

Router.get('/events',function(req,res){
    res.render('events');
})

Router.route('/addEvent')
    .get(function(req,res){
        res.render('addEvent');
    })
    .post(function(req,res){
        console.log(req.body);
        res.redirect('/');
    })

Router.get('/gallery',function(req,res){
    res.render('gallery');
})

Router.get('/notfound',function(req,res){
    res.render('notfound');
})

Router.get('/blog',function(req,res){
    res.render('blog');
})

Router.get('/council',function(req,res){
    res.render('council');
})

Router.route('/feedback')
    .get(function(req,res){
        res.render('feedback');
    })
    .post(function(req,res){
        console.log(req.body);
        res.redirect('/feedback');
    })

module.exports = Router;