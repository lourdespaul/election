/**
 * Created by agil on 14/6/17.
 */

var express = require('express');
var router = express.Router();
var flash = require('express-flash');
var passport = require('passport');

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/vote/spl', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
});

module.exports = router;