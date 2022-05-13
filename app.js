const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys')
const app = express();
const facebookAuth = require('./config/passportFacebook');
const googleAuth = require('./config/passportGoogle.js');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileAuths');
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

//Auth routes
app.get('/auth', authRoutes );



//profile routes
app.get('/profile', profileRoutes);


//404

app.use((req, res)=>{
    res.status(404).send("404 - Wrong Page");
});

