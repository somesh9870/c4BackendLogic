const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  name: String,
  image: String,
  specialization: String,
  experience: Number,
  location: String,
  date: String,
  slots: Number,
  fee: Number,
});

const AppoinmentModel = mongoose.model("appoinment", appointmentSchema);

module.exports = AppoinmentModel;
