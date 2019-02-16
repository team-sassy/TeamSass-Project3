const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  carrier: {type: String, required: true},
  flightnumber: {type: String, required: true},
  departure_time: { type: Date, required: true},
  arrival_time: {type: Date, required: true},
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;