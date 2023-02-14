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
// POST /reviews/:id/favorite
router.post('/:id/favorites', ensureLoggedIn, reviewsCtrl.favorites);
// GET /reviews/:id show
router.get('/:id', reviewsCtrl.show);
// DELETE /reviews/:id/delete 
router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete);
// GET /reviews/:id/edit
router.get('/:id/edit', ensureLoggedIn, reviewsCtrl.edit)
// GET /reviews/favorites
router.get('/favorites', reviewsCtrl.showFavorites);

module.exports = router;