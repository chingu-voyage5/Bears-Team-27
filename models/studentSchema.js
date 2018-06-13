const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = require("./contactSchema");
const addressSchema = require("./addressSchema");
const parentSchema = require("./parentSchema");
const schoolSchema = require("./schoolSchema");
const collegeSchema = require("./collegeSchema");

const studentSchema = new Schema({
    student_name: {
        type: String,
        required: true
    },
    student_age: {
        type: Number,
        required: true
    },
    contact: contactSchema, 
    address: {
        type: addressSchema,
        required: false  // if the student lives with his/her parents then no need to use this property
    },
    father: parentSchema,
    mother: parentSchema,
    school: schoolSchema,
    college: collegeSchema
});

module.exports = studentSchema;