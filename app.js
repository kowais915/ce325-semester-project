const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys')
const authRoutes = require('./routes/authRoutes');
const facebookAuth = require('./config/passportFacebook');
const googleAuth = require('./config/passportGoogle.js');
const profileRoutes = require('./routes/profileAuths');
const passport = require('passport');
const PORT = 3000;


// express app
const app = express();

// middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));


// database connection
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

//Auth routes

app.use("/auth", authRoutes);


//profile routes
app.use("/profile", profileRoutes);


//404
app.use((req, res)=>{
    res.status(404).send("404 - Wrong Page");
});

