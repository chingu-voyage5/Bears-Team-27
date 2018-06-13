const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feeSchema = new Schema({
  tution_fees: {
    type: Number,
    required: true
  },
  addmission_fees: {
    type: Number
  },
  security_deposit: {
    type: Number
  },
  transportation_fees: {
    type: Number
  },
  lab_fees: {
    type: Number
  },
  sports_fees: {
    type: Number
  },
  misc_charges: {
    type: Number
  },
  scholarships_available: {
    type: Boolean,
    default: false
  }
});
