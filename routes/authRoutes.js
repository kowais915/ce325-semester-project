const express = require('express');
const routes = express.Router();
const User = require('../models/userModel');
const passport = require('passport');
// google

routes.get('/google', passport.authenticate('google', {
    scope:['profile']
}));


routes.get('/facebook', passport.authenticate('facebook'));

module.exports = routes;
