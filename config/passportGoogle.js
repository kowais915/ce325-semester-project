const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys= require('../keys');
const UserG = require('../models/userModel_g');


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


//the object and the callback function
passport.use(
new GoogleStrategy(
    {
        //google auth credentials
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "http://localhost:3000/auth/redirect"

    }, (accessToken, refreshToken, profile, done)=>{

        //checking if the user already registered
        UserG.findOne({
            googleid: profile.id
        })
        .then((user)=>{
            if(user){
                console.log("Already registered");
                done(null, user);
            }else{
                const newUser = new UserG({
                    googleid: profile.id,
                    username: profile.displayName,
                    picture: profile.photos[0].value
                });
                newUser.save()
                .then((val)=>{
                    console.log("New user created");
                    done(null, val);
                })
                .catch(err=>{
                    console.log("Error ocurred while saving the user");
                })
            }
        })


        // //callback function
        // console.log("Function fired");
        // console.log(profile);
    }));
