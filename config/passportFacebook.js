const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys= require('../keys');


//serialize users
passport.serializeUser((user, done) => {
    done(null, user);
})


// deserialize users
passport.deserializeUser((id, done)=>{
    
})


passport.use(new FacebookStrategy(
{
    //google auth credentials
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clinetSecret,
    callbackURL: "http://localhost:3000/auth/redirect"

}, (accessToken, refreshToken, profile, done)=>{


    //callback function
}
));
