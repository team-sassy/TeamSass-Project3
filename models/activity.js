const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  location: {type: String, required: true},
  time: { type: Date, required: true},
  description: {type: Date, required: true},
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;