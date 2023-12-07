const mongoose = require('mongoose');

// Define a schema for the user
const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,

  },
  mobile: {
    countryCode: {
      type: String,
      required: true,
    },
    number: {
      type: String,

    },
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
});



module.exports = userSchema;
