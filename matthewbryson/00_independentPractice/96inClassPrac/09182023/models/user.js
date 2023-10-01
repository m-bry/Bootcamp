const mongoose = require('mongoose');
const passportLocalMongoose = require(`passport-local-mongoose`);

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

//extend mongoose functionality with PLM
UserSchema.plugin(passportLocalMongoose);

//user == name of collection
// UserSchema == pattern that is used to store data
let UserModel = mongoose.model('User', UserSchema);

//export the model
module.exports = UserModel;