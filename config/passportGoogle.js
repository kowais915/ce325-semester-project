const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
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
});



passport.use(
new GoogleStrategy(
    {
        //google auth credentials
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "http://localhost:3000/auth/redirect"

    }, (accessToken, refreshToken, profile, done)=>{


        //callback function
        console.log("Function fired");
        console.log(profile);
    }   
    )
);
