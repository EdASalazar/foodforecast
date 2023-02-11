const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
    index,
}

function index(req, res) {
    Review.find({}, function(err, reviews) {
        res.render('reviews/index', { title: 'Reviews', reviews })
    });
}