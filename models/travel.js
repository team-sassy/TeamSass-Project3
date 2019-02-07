const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  location: { type: String, required: true },
  destination: [{type: String, required: true}],
  departure: { type: Date, required: true},
  arrival: {type: Date, required: true,
  description: String,
  }
});

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;