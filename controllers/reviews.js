const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
    index,
}

function index(req, res) {
    Review.find({}, function(err, reviews) {
        User.find({}, function(err, users) {
        res.render('reviews/index', { title: 'Reviews', reviews , users })
        });
    });
}