var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /reviews/:id/comments
router.post('/reviews/:id/comments', ensureLoggedIn, commentsCtrl.create);
// DELETE /reviews/:id

module.exports = router;
//commite