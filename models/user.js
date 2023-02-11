const mongoose = require('mongoose');
const { reviews } = require('../data');
const review = require('./review');
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
   name: String,
   googleId: {
    type: String,
    required: true,
   },
   email: String,
   avatar: String,
   reviews: {
    type: Schema.Types.ObjectId,
    ref: 'Review',
    required: true,
  },
 }, {
   timestamps: true
 });

 module.exports = mongoose.model('User', userSchema);