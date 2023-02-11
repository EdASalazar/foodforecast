var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../contollers/reviews');


//all routes start with reviews. 
// GET /reviews 
router.get('/', reviewsCtrl.index);

module.exports = router;