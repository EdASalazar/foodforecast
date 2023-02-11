const mongoose = require('mongoose');
// Shorcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    vendor: String,
    blog: String,
    rating: Number,
    price: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Review', reviewSchema);