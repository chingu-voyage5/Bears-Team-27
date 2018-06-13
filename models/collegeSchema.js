const mongoose = require("mongoose");
const AddressSchema = require("./addressSchema");
const ContactSchema = require("./contactSchema");
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    college_id:{
        type: String,
        required: true
    },
    college_name: {
        type: String,
        required: true
    },
    address: AddressSchema,
    contact: ContactSchema,
    departemets: {
        type: [Number],  // department id
        required: true
    },
    affiliated_to: {
        // if affiliated, relate the univ object
    },
    courses_offered: {
        type: [Number], // id of courses
        required: true
    },
    specific_gender:{
        type: String,
        default: "All"
    },
    hostels: {
        type: Number
    }
});

module.exports = collegeSchema;