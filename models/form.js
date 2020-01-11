const mongoose = require('mongoose');
const Register = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  sname: {
    type: String,
    required: true
  },
  bio: {
    type: String,

    default:'None'
  },
  email: {
    type: String,
    default:"noemail@gmail.com"
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  number: {
    type: Number,
    required:true

  },
});

const register = mongoose.model('Register', Register);

module.exports = register;
