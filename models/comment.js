const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    feedback: String,
    rateReview: Number,
    userName: String,
    userAvatar: String,
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
}, { 
    timestamps: true, 
});  


module.exports = mongoose.model('Comment', commentSchema);
