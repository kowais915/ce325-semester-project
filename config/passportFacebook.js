const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys= require('../keys');
const UserFb = require('../models/userModel_fb');


//serialize users
passport.serializeUser((user, done) => {
    done(null, user);
})


// deserialize users
passport.deserializeUser((id, done)=>{
    UserFb.findById(id)
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

    UserFb.findOne({
        facebookid: profile.id
    })
    .then(currenUser=>{
        if(currenUser){
            console.log("Already registered");
            done(null, currenUser);
        }else{
            const newUser = new UserFb({
                facebookid: profile.id,
                username: profile.displayName,
                picture: profile.photos[0].value
            });

            newUser.save()
            .then(newUser=>{
                console.log("New user signed up via fb");
                done(null, newUser);
            })
            .catch(err=>{
                console.log("Error creating a user via fb");
            })
        }
    }).catch(err=>{

        console.log("Error occured");
    })
    

    

    //callback function
}
));
