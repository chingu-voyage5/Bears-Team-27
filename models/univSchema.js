const mongoose = require("mongoose");
const AddressSchema = require("./addressSchema");
const ContactSchema = require("./contactSchema");
const Schema = mongoose.Schema;

const univSchema = new Schema({
    univ_id: {
        type: String, 
        required: true
    },
    univ_name: {
        type: String, 
        required: true
    },
    address: AddressSchema,
    contact: ContactSchema,
    stars: {
        type: Number,
        required: false
    },
    reviews: [
        {
          type: Schema.Types.ObjectId,
          ref: "Review"
        }
      ],
    established: {
        type: Date
    },
    last_updated_at: {
        type: Date
    },
    affiliates: {
        type: Boolean,
        required: false
    }
});

module.exports = univSchema;
