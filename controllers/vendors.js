const Vendor = require('../models/vendor');
const User = require('../models/user');

module.exports = {
    index,
    create,
    new: newVendor,
    show, 
}

function show(req, res) {
    Vendor.findById(req.params.id, function(err, vendor) {
        console.log(vendor)
        res.render('vendors/show' , { title: 'Vendor Details' , vendor })
    });
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
    const userId = req.user._id;
    req.body.user = userId;
    const vendor = new Vendor(req.body);
    vendor.save(function (err) {
        if (err) return res.redirect('/vendors/new');
        res.redirect('/vendors');
    });
}

