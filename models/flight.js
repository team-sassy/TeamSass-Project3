const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  id: {type:String, required:true},
  departure: {type: String, required: true},
  arrival: {type: String, required: true},
  stops: {type: Number, required: true},
  carrier: {type: String, required: true},
  flightnumber: {type: String, required: true},
  departure_time: { type: Date, required: true},
  arrival_time: {type: Date, required: true},
  userID: {type:String, required: true}
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;