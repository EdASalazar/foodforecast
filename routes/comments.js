var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /reviews/:id/comments

// DELETE /reviews/:id

module.exports = router;
