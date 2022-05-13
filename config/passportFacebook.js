const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys= require('../keys');
const User = require('../models/userModel');


//serialize users
passport.serializeUser((user, done) => {
    done(null, user);
})


// deserialize users
passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then(user=>{
        done(null, user);
    })
    .catch(err=>{
        console.log("Error deserializing the user");
    })
})


passport.use(new FacebookStrategy(
{
    //google auth credentials
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clinetSecret,
    callbackURL: "http://localhost:3000/auth/redirect_fb/",
    profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done)=>{


    console.log(profile);

    //callback function
}
));
