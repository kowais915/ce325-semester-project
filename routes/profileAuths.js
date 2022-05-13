const express = require('express');
const routes = express.Router();
const User = require('../models/userModel');
const { route } = require('./authRoutes');


routes.get("/", (req, res)=>{
    res.send("Working");
})

module.exports = routes;