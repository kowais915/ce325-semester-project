const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.listen('3000', ()=>{
    console.log("Listening to requests at 3000");
});

