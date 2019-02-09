const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  depature_location: {type: String, required: true},
  destination_location: {type: String, required: true},
  departure_time: { type: Date, required: true},
  arrival_time: {type: Date, required: true},
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;