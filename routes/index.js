var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/reviews');
  // res.render('welcome', { title: 'Welcome ' });
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

router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/', //-> replace '/' as desired
      failureRedirect: '/'
    }
  )(req, res, next);  // Call the middleware returned by passport
});

router.get('/logout', function(req, res) {
  req.logout(function() {
    // change path for your landing page
    res.redirect('/reviews');
  });
});



module.exports = router;
