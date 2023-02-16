const express = require('express');
const mongoose = require('mongoose');
// const keys = require('./keys')
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileAuths');
const passport = require('passport');
const UserG = require('./models/userModel_g');
const UserFb = require('./models/userModel_fb');
const cookieSession = require('cookie-session');
const { redirect } = require('express/lib/response');
const createRoutes = require('./routes/createRoutes')
const bodyParser = require('body-parser');
const Note = require('./models/userNote');
const PORT = 3000;
require('dotenv').config();


// express app
const app = express();

// middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



// database connection
mongoose.connect(process.env.API_KEY).then(()=>{
    console.log("Connected to the database");
    
    app.listen(PORT, ()=>{
        console.log("Listening to requests at 3000");
    });
}).catch("Error connecting to the database");

//cookie setup
// app.use(cookieSession({

//     maxAge: 24*60*60*1000,
//     keys:keys.key
// }));

app.use(passport.initialize());
app.use(passport.session());


//routes
app.get("/", (req, res)=>{


Note.find({}, (err, data)=>{
    res.render('home', {notes: data, user: req.user });
    console.log(data);
})
})


//home
app.get("/login", (req, res)=>{
    res.render("login", {user: req.user});
})
//Auth routes

app.use("/auth", authRoutes);

// post request
app.post("/", (req, res)=>{
    console.log(req.body)
    const note = new Note(req.body);
    note.save()
    .then(val=>{
        console.log("saved to the database");
        res.redirect('/')
    }).catch(err=>{
        console.log("Wew there was an error.")
    })
    
    
    
});





//profile routes
app.use("/profile", profileRoutes);

//create routes
// app.use("/create", createRoutes);
app.get("/create", (req, res)=>{
    res.render("create", {user: req.user});
})

app.get("/post:id", (req, res)=>{
 Note.findById(req.params.id).then(resu=>{
    console.log(resu);
    res.render('detail', {data: resu});
 }).catch(err=>{
    console.log(err);
 })
})

//404
app.use((req, res)=>{
    res.status(404).send("404 - Wrong Page");
});
