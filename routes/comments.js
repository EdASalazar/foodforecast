var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn');

