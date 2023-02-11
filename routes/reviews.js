var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews')


//all routes start with reviews. 
// GET /reviews 
router.get('/', reviewsCtrl.index);
// Get /reviews/new has to go before id
// GET /reviews/:id show
router.get('/:id', reviewsCtrl.show);



module.exports = router;