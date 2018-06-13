const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = require("./contactSchema");
const addressSchema = require("./addressSchema");

const parentSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true
    },
    address: addressSchema,
    contact_info: contactSchema,
    salary_pa: {
        type: Number,
        default: 0.00
    }
});

module.exports = parentSchema;