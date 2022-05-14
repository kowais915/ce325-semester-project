const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchemaG = new Schema({

   googleid: {type: String, required: true},
   username: {type: String, required: true},
   picture: {type: String, required: true}



}

)

const User_g = mongoose.model('UserGoogle', userSchemaG);
module.exports = User_g;
