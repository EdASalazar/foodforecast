var express = require('express');
var router = express.Router();
const vendorsCtrl = require('../controllers/vendors');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'


// get /vendors
router.get('/vendors', vendorsCtrl.index);
// get /vendors/:id show

//post /vendors/new
router.get('/vendors/new', vendorsCtrl.new);
//vendor/:id show

//vendor vendor/create
router.post('/vendors/add', vendorsCtrl.create)
module.exports = router;