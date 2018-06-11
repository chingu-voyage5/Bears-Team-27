const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    phone_number: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: false
    }
});

module.exports = contactSchema;