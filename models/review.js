const mongoose = require('mongoose');
// Shorcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

});


module.exports = mongoose.model('Review', reviewSchema);