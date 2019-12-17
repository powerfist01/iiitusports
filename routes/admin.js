const express = require('express');
const Router = express.Router();

Router.route('/addEvent')
    .get(function (req, res) {
        res.render('addEvent');
    })
    .post(function (req, res) {
        console.log(req.body);
        res.redirect('/');
    })


module.exports = Router;