const express = require('express');
const routes = express.Router();
const { route } = require('./authRoutes');
const UserG = require('../models/userModel_g');
const UserFb = require('../models/userModel_fb');


routes.get("/", (req, res)=>{
    res.send("Working");
})

module.exports = routes;