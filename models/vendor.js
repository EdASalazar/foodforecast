const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: String,
    streetAddress: String,
    state: String,
    city: String,
    zipcode: Number,
    avgRating: Number,
    website: String,
    phoneNumber: Number,
    // This will be an enum
    venueType: String,
});


module.exports = mongoose.model('Vendor', vendorSchema);