// Import mongoose
const mongoose = require("mongoose");

// Creating the schema
const DoggosSchema = new mongoose.Schema({
  doggoName: {
    type: String,
    required: true,
  },
  doggoBreed: {
    type: String,
    required: true,
  },
  doggoAge: {
    type: Number,
    required: true,
  },
  doggoSize: {
    type: String,
    required: true,
  },
  doggoForAdoption: {
    type: Boolean,
    required: true,
  },
  doggoSocializing: {
    type: Boolean,
    required: true,
  },

  doggoTraining: {
    type: Boolean,
    required: true,
  },

  doggoDating: {
    type: Boolean,
    required: true,
  },
  doggoForRehoming: {
    type: Boolean,
    required: true,
  },
});

// Create the model
const DoggosModel = mongoose.model("Doggos", DoggosSchema);

module.exports = DoggosModel;
