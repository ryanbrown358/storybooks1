const express = require('express');
const router = express.Router();
const passport = require('passport');

// load the google authentication
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

/*google call back function for logging in with google*/
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    /*Successful authentication, redirect dashboard*/
    res.redirect('/dashboard');
});
module.exports = router;