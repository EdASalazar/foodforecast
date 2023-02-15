const Vendor = require('../models/vendor');

module.exports = {
    index,
    create,
    new: newVendor, 
}

function index(req, res) {
    Vendor.find({}, function (err, vendors) {
        User.find({}, function (err, users) {
            res.render('vendors/index', { title: 'Vendor List', vendors, users })
        });
    });
}
 

function newVendor(req, res) {
    res.render('vendors/new', { title: 'Add Vendor' })
   }
   

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const vendor = new Vendor(req.body);
    vendor.save(function (err) {
        if (err) return res.redirect('vendors/new');
        res.redirect('/vendors');
    });
}

