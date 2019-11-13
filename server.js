const express = require('express');
const path = require('path');
const ejs = require('ejs');
const adminRouter = require('./routes/admin');
const adminRouter = require('./routes/admin');
const sportRouter = require('./routes/sport');
const indexRouter = require('./routes/index');


const app = express();

// setting the views folder and public folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static',express.static(__dirname + '/public'));

app.use('/',indexRouter);
app.use('/admin',adminRouter);
app.use('/sport',sportRouter);
app.use('/admin', adminRouter);

const port = process.env.PORT || 4000;
app.listen(port,function(err){
    if(err){
        console.log('Error in starting server at port %d',port);
        throw err;
    }
    console.log('Server Running at http://localhost:%d',port);
})