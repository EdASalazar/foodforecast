const Review = require('../models/review');
const User = require('../models/user');
const Comment = require('../models/comment');
const Vendor = require('../models/vendor');
const { $where } = require('../models/review');
const {Client} = require("@googlemaps/google-maps-services-js");

module.exports = {
    index,
    show,
    new: newReview,
    create,
    delete: deleteReview,
    edit,
    favorites,
    showFavorites,
    newVendor,
}
function newVendor(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const vendor = new Vendor(req.body);
    vendor.save(function (err) {
        if (err) return res.redirect('reviews/new');
        res.redirect('/reviews');
    });
}

function showFavorites(req, res) {
    const userId = req.user._id;
    Review.find({ favedByUsers: userId }, function (err, reviews) {
        res.render('reviews/favorites', { title: 'Faves', reviews });
    });
}

function favorites(req, res) {
    Review.findById(req.params.id, function (err, review) {
        review.favedByUsers.push(req.user._id);
        review.save(function (err) {
            res.redirect(`/reviews/${req.params.id}`);
        });
    });
}

function edit(req, res) {
    res.redirect('/reviews');
}

function deleteReview(req, res) {
    Review.findById(req.params.id)
        .then(function (review) {
            review.deleteOne();
            res.redirect('/reviews');
        });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const review = new Review(req.body);
    review.save(function (err) {
        if (err) return res.redirect('reviews/new');
        res.redirect('/reviews');
    });
}


function index(req, res) {
     Review.find({}, function (err, reviews) {
        User.find({}, function (err, users) {
            res.render('reviews/index', { title: 'Reviews', reviews, users })
        });
    });
}



function show(req, res) {
    Review.findById(req.params.id, function (err, review) {
        console.log(review._id);
        Comment.find({ review: review._id }, function (err, comment) {
            res.render('reviews/show', { title: 'Review Details', review, comment });
        });
    });
}


function newReview(req, res) {
    res.render('reviews/new', { title: 'Add Review', })
}

