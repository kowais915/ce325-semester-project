const express = require('express');
const routes = express.Router();
const passport = require('passport');
const UserG = require('../models/userModel_g');
const UserFb = require('../models/userModel_fb');
// google routes

routes.get('/google', passport.authenticate('google', {
    scope:['profile']
}));

routes.get('/redirect', passport.authenticate('google'), (req, res)=>{
    res.render('profile', {
        user: req.user
    })
});




// facebook routes

routes.get('/facebook', passport.authenticate('facebook', {
    scope: ['user_friends']
}));

routes.get('/redirect_fb', passport.authenticate('facebook'), (req, res)=>{
    res.render('profile', {
        user: req.user
    })
});


//logout
routes.get("/logout", (req, res)=>{
    req.logOut();
    res.redirect("/");
})

module.exports = routes;
