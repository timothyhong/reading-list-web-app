const router = require('express').Router();
const fetch = require('node-fetch');
const passport = require('passport');
const connection = require('../config/database');
const User = connection.models.User;
require('../config/passport');

router.get('/', async (req, res, next) => {
    res.render('login');
});

router.post('/', passport.authenticate('local', { 
    successRedirect: '/my_lists', 
    failureRedirect: '/login', 
}));

module.exports = router;