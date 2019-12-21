const user = new Schema({
    name: String,
    password: String,
    email:String
}); 

var userModel = mongoose.model('user', user);

module.exports = {
    userModel : userModel
}