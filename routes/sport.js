const express = require('express');
const Router = express.Router();

Router.route('/football')
.get(function(req,res){
    res.render('football');
})
.post(function(req,res){

})

Router.route('/basketball')
.get(function(req,res){
    res.render('basketball');
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

module.exports = Router;