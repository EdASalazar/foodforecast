var express = require('express');
var router = express.Router();
const vendorsCtrl = require('../controllers/vendors');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'


// get /vendors
router.get('/vendors', vendorsCtrl.index);
//post /vendors/new

//vendor/:id show

module.exports = router;