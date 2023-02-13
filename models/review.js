const mongoose = require('mongoose');
// Shorcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    vendor: {
        type: String,
        // required: true,
    },
    blog: {
        type: String,
        maxLength: 1000,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        // required: true,
    },
    price: {
        type: Number,
        min: 1,
        max: 5,
    },
    userName: String,
    userAvatar: String,
    imgDesc: String,
    vendorImg: { 
        type: String,
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userFaved: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    dateCreated: {
        type: Date,
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Review', reviewSchema);