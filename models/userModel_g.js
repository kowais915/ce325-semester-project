const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
   {
       college: {type: String, required: true},
       subject:{type: String, required: true},
       note:{type: String, required: true}
       
   }
);


const userSchemaG = new Schema({

   googleid: {type: String, required: true},
   username: {type: String, required: true},
   picture: {type: String, required: true},
   notes: [noteSchema]



}

)

const User_g = mongoose.model('UserGoogle', userSchemaG);
module.exports = User_g;
