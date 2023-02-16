const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
   {
       
       college: {type: String, required: true},
       subject:{type: String, required: true},
       note:{type: String, required: true}
   }
);

const userSchemaFb = new Schema({

   facebookid: {type: String, required: true},
   username: {type: String, required: true},
   picture: {type: String, require: true},
   notes:[noteSchema]
}

  
)

const UserFb = mongoose.model('UserFb', userSchemaFb);
module.exports = UserFb;
