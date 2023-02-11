const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
    index,
    show,
    new: newReview,
    create,
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    const review = new Review(req.body);
    review.save(function(err) {
        if (err) return res.redirect('reviews/new');
        res.redirect('/reviews');
    });
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

function newReview(req, res) {
    res.render('reviews/new', { title: 'Add Reviews',})
}
