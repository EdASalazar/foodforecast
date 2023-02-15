const Vendor = require('../models/vendor');

module.exports = {
    index,
    // create,
}

function index(req, res) {
 res.render('vendors/index', { title: 'Vendor List' })
}

// function create(req, res) {
//     req.body.user = req.user._id;
//     req.body.userName = req.user.name;
//     req.body.userAvatar = req.user.avatar;
//     const vendor = new Vendor(req.body);
//     vendor.save(function (err) {
//         if (err) return res.redirect('reviews/new');
//         res.redirect('/reviews');
//     });
// }

