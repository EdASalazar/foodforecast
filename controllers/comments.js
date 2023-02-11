const Comment = require('../models/comment');
const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
    create,
}

function create(req, res) {
    res.redirect('/');
}