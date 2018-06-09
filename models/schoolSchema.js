const mongoose = require("mongoose");
const AddressSchema = require("./addressSchema");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  school_id: {
    type: String,
    required: true
  },
  school_name: {
    type: String,
    required: true
  },
  address: AddressSchema,
  contact: {
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
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: "Teacher"
  },
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
  fee_structure: {
    type: Schema.Types.ObjectId,
    ref: "Fee"
  },
  last_updated_at: {
    type: Date
  },
  school_type: {
    type: String,
    enum: [
      "Playschool",
      "Kindergarten",
      "Primary",
      "Secondary",
      "Senior Secondary"
    ]
  }
});
module.exports = schoolSchema;
