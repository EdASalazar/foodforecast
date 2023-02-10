var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!' });
});

router.get('/auth/google', passport.authenticate(
  // telling passport which passport strategy to use
  'google', 
  {
    scope: ['profile', 'email'],
    //optional
    prompt: 'select_account',
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    //change to what's best for your app
    failureRedirect: '/',
  }
));


router.get('/logout', function(req, res) {
  req.logout(function() {
    // change path for your landing page
    res.redirect('/');
  });
});



module.exports = router;
