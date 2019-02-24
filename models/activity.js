const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: {type: String, required: true},
  location: {type: String, required: true},
  time: { type: String, required: true},
  description: {type: String},
  userID: {type: String}
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;