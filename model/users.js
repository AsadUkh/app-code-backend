const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    screenName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword : String
});

module.exports = mongoose.model('user', UserSchema);