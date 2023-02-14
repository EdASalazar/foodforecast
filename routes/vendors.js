var express = require('express');
var router = express.Router();
const vendorsCtrl = require('../controllers/vendors');
const ensureLoggedIn = require('../config/ensureLoggedIn');