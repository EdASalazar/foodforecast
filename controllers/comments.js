const Comment = require('../models/comment');
const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
    create,
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.review = req.params.id;
    const comment = new Comment(req.body);
        comment.save(function(err) {
            if (err) return res.redirect('/reviews/index');
            res.redirect(`/reviews/${req.params.id}`);

        });
}