const express = require('express');
const Router = express.Router();

Router.get('/football',function(req,res){
    res.render('football');
})

module.exports = Router;