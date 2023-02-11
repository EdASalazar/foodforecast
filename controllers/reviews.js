const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
    index,
    show,
}

function index(req, res) {
    Review.find({}, function(err, reviews) {
        User.find({}, function(err, users) {
        res.render('reviews/index', { title: 'Reviews', reviews , users })
        });
    });
}

function show(req, res) {
    Review.findById(req.params.id, function(err, review) {
        res.render('reviews/show', { title: 'Review Details', review });      
    });
}