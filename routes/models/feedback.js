const feedback = new Schema({
    email: String,
    feedback: String,
    timestamp:Date
}); 

var feedbackModel = mongoose.model('feedback', feedback);

module.exports = {
    feedbackModel : feedbackModel
}