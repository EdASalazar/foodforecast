const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String,
    address: String,
    avgRating: Number,
    website: String,
    phoneNumber: Number,
    // This will be an enum
    venueType: String,
});


module.exports = mongoose.model('Vendor', vendorSchema);