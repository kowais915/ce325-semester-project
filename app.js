const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys')
const app = express();
const facebookAuth = require('./config/passportFacebook');
const googleAuth = require('./config/passportGoogle.js');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


mongoose.connect(keys.mongodb.uri).then(()=>{
    console.log("Connected to the database");
    
    app.listen(PORT, ()=>{
        console.log("Listening to requests at 3000");
    });
}).catch("Error connecting to the database");



//routes
app.get("/", (req, res)=>{
    res.render('login');
})

//facebook routes

//google routes

//profile routes


