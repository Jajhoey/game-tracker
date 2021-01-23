const mongoose = require('mongoose');

//Creating a schema for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024 // The password will be longer than other fields to allow room for hashing
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema)
