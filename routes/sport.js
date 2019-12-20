const express = require('express');
const Router = express.Router();

Router.route('/')
.get(function(req,res){
    res.json({
        message:"This is Sports Page",
        status:"OK"
    });
})
.post(function(req,res){

})

Router.route('/football')
.get(function(req,res){
    res.render('football');
})
.post(function(req,res){

})

Router.route('/football/players')
.get(function(req,res){
    res.render('footballPlayers');
})
.post(function(req,res){

})

Router.route('/basketball')
.get(function(req,res){
    res.render('basketball');
})
.post(function(req,res){
    
})

Router.route('/basketball/players')
.get(function(req,res){
    res.render('basketballPlayers');
})
.post(function(req,res){

})

Router.route('/tabletennis')
.get(function(req,res){
    res.render('tabletennis');
})
.post(function(req,res){

})

Router.route('/badminton')
.get(function(req,res){
    res.render('badminton');
})
.post(function(req,res){
    
})

Router.route('/chess')
.get(function(req,res){
    res.render('chess');
})
.post(function(req,res){
    
})

Router.route('/cricket')
.get(function(req,res){
    res.render('cricket');
})
.post(function(req,res){
    
})

Router.route('/volleyball')
.get(function(req,res){
    res.render('volleyball');
})
.post(function(req,res){
    
})

module.exports = Router;