const express = require('express');
const routes = express.Router();
const { route } = require('./authRoutes');
const UserG = require('../models/userModel_g');
const UserFb = require('../models/userModel_fb');
const { redirect } = require('express/lib/response');



const authCheck = (req, res, next)=>{
    if(!req.user){
        res.redirect('/');
        
    }else{
        next();
        
    }
}
//create
routes.get("/", authCheck, (req, res)=>{
    
    res.render("create", {user: req.user});
})


module.exports = routes;