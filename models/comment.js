const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    feedback: Text,
    rateReview: Number,
    userName: String,
    userAvatar: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
}, { 
    timestamps: true, 
});  


module.exports = mongoose.model('Comment', commentSchema);
