const express = require('express');
const routes = express.Router();
const User = require('../models/userModel');
const passport = require('passport');
// google

routes.get('/google', passport.authenticate('google', {
    scope:['profile']
}));

routes.get('/redirect', passport.authenticate('google'), (req, res)=>{
    res.send("working");
});


routes.get('/facebook', passport.authenticate('facebook', {
    scope: ['user_friends']
}));

routes.get('/redirect_fb', passport.authenticate('facebook'), (req, res)=>{
    res.send("working");
});

module.exports = routes;
