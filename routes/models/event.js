var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const event = new Schema({
    nameOfEvent: String,
    dateOfEvent: String,
    lastRegistrationDate:String,
	linkForRegistration: String,
    linkForKnowledge: String,
    message: String,
    ruleBook: File
}); 

var eventModel = mongoose.model('event', event);

module.exports = {
    eventModel : eventModel
}