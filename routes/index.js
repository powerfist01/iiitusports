const express = require('express');
const Router = express.Router();


Router.get('/', function (req, res) {
    res.render('index');
})

Router.get('/admin', function (req, res) {
    res.render('admin');
})

Router.get('/events', function (req, res) {
    res.render('events');
})

Router.get('/achievements', function (req, res) {
    res.render('achievements');
})

Router.get('/gallery', function (req, res) {
    res.render('gallery');
})


Router.get('/blog', function (req, res) {
    res.render('blog');
})

Router.get('/blogging', function (req, res) {
    res.render('blogging');
})

Router.get('/council', function (req, res) {
    res.render('council');
})

Router.route('/feedback')
    .get(function (req, res) {
        res.render('feedback');
    })
    .post(function (req, res) {
        console.log(req.body);
        
        res.redirect('/feedback');
    })

Router.get('/notfound', function (req, res) {
    res.render('notfound');
})

module.exports = Router;