var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews')


//all routes start with reviews. 
// GET /reviews 
router.get('/', reviewsCtrl.index);
// POST /reviews new
router.post('/', reviewsCtrl.create);
// GET /reviews/new has to go before id
router.get('/new', reviewsCtrl.new);
// GET /reviews/:id show
router.get('/:id', reviewsCtrl.show);



module.exports = router;