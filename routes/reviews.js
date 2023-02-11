var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn');

//all routes start with reviews. 
// GET /reviews 
router.get('/', reviewsCtrl.index);
// POST /reviews new
router.post('/', ensureLoggedIn, reviewsCtrl.create);
// GET /reviews/new 
router.get('/new', ensureLoggedIn, reviewsCtrl.new);
// GET /reviews/:id show
router.get('/:id', reviewsCtrl.show);



module.exports = router;