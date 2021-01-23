// User model goes here

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 1,
        maxlength: 30,
        lowercase: true,
        pattern: /^[a-z0-9]+$/,
        required: true
    },
    passwordHashAndSalt: {
        type: String
      }
});

const User = mongoose.model('User', userSchema);

module.exports = User;