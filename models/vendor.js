const mongoose = require('mongoose');
const review = require('./review');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: String,
    streetAddress: String,
    state: String,
    city: String,
    state: {type: String,
        maxLength: 2,
    },
    zipcode: Number,
    avgRating: Number,
    website: String,
    phoneNumber: Number,
    // This will be an enum
    venueType: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'review',
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    userName: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Vendor', vendorSchema);