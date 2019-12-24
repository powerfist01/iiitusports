var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    password: String,
    email:String
}); 

var userModel = mongoose.model('user', user);

module.exports = {
    userModel : userModel
}