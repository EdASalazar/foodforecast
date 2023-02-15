const mongoose = require('mongoose');
const review = require('./review');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: String,
    streetAddress: {
        type: String,
        default: '123 Street Ave',
    },
    city: {
        type: String,
        default:'Los Angeles',
    },
    state: {
        type: String,
        default: 'CA',
    },
    zipcode: {
        type: Number,
        default: 12234,
    },
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