const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys= require('../keys');

passport.use(new GoogleStrategy(
{
    //google auth credentials
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:5000/auth/redirect"

}, ()=>{


    //callback function
}
));
