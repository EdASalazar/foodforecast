const mongoose = require('mongoose');
const vendor = require('./vendor');
const comment = require('./comment');
const user = require('./user');

// Shorcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
    },
    blog: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    userName: String,
    userAvatar: String,
    imgDesc: String,
    vendorImg: { 
        type: String,
        enum: ['Mobile Cart', 'Mobile Vehicle', 'Tent and Table', 'Pop-Up']
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    favedByUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    dateCreated: {
        type: Date,
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Review', reviewSchema);