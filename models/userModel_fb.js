const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchemaFb = new Schema({

   facebookid: {type: String, required: true},
   username: {type: String, required: true},
   picture: {type: String, require: true}
}

  
)

const UserFb = mongoose.model('UserFb', userSchemaFb);
module.exports = UserFb;
