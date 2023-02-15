var express = require('express');
var router = express.Router();
const vendorsCtrl = require('../controllers/vendors');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'


// get /vendors
router.get('/vendors', vendorsCtrl.index);
// get /vendors/:id show

//post /vendors/new
router.get('/vendors/new', ensureLoggedIn, vendorsCtrl.new);
//vendor/:id show
router.get('/vendors/:id', vendorsCtrl.show);
//vendor vendor/create
router.post('/vendors/add', ensureLoggedIn, vendorsCtrl.create)

module.exports = router;