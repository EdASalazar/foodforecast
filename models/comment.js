const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    feedback: {
        type: String,
        maxLength: 200,
    },
    rateReview: {
        type: Number,
        min: 1,
        max: 3,
        required: true,
    },
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
