const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
   locality: {
    type: String
  },
  landmark: {
    type: String,
    required: false
  },
   street_address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
   state: {
    type: String
  },
  country: {
    type: String
  },
  postal_code: {
    type: Number,
    required: true
  },
   location : {
     lat : {
       type : Number },
     lng : {
      type : Number  }
   }
 
});
