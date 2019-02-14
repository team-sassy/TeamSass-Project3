const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diningSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  rating:{type: Number, required:true},
  url: { type: String, required: true},
});

const Dining = mongoose.model("Dining", diningSchema);

module.exports = Dining;