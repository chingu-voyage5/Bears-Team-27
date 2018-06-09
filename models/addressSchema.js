const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  postal_code: {
    type: Number,
    required: true
  },
  street_address: {
    type: String,
    required: true
  },
  locality: {
    type: String
  },
  landmark: {
    type: String,
    required: false
  }
});
