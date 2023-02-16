const mongoose = require('mongoose');
const review = require('./review');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN', 'MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
        minLength: 2,
        maxLength: 2,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    },
    avgRating: Number,
    website: String,
    phoneNumber: Number,
    venueType: {
        type: String,
        enum: ['Mobile Cart', 'Food Truck', 'Tent and Table', 'Pop-Up', 'Other']
    },
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
    image: { 
        type: String,
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Vendor', vendorSchema);