var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const blog = new Schema({
    name: String,
    author: String,
    createdOn:Date,
	comments: Array,
    likes: Number
}); 

var blogModel = mongoose.model('blog', blog);

module.exports = {
    blogModel : blogModel
}