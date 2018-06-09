const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this could be designed better
const facultySchema = new Schema({
  school_id: Schema.Types.ObjectId,
  fullname: {
    firstname: {
      type: String,
      required: true
    },
    middlename: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      required: true
    }
  },
  gender: {
    type: String,
    enum: ["Male", "Female"]
  },
  age: {
    type: Number,
    required: true
  },
  academic_degree: {
    qualification: {
      type: String,
      enum: ["Bachelors", "Masters", "Phd"],
      required: true
    },
    major: {
      department: {
        type: String,
        required: true
      }
    },
    graduating_college: {
      type: String,
      required: true
    },
    graduation_year: {
      type: Date
    }
  },
  experience_in_years: {
    type: Number
  },
  publications: {
    type: String
  }
});

module.exports = facultySchema;
