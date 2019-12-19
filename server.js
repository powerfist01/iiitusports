const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// setting the views folder and public folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public',express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

const adminRouter = require('./routes/admin');
const sportRouter = require('./routes/sport');
const indexRouter = require('./routes/index');



app.use('/',indexRouter);
app.use('/admin',adminRouter);
app.use('/sport',sportRouter);
app.use('/admin', adminRouter);


app.use(function (req, res, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
	res.render('notfound');
});

const port = process.env.PORT || 8888;

app.listen(port,function(err){
    if(err){
        console.log('Error in starting server at port %d',port);
        throw err;
    }
    console.log('Server Running at http://localhost:%d',port);
})