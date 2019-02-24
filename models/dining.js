const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diningSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  rating:{type: Number, required:true},
  link: { type: String, required: true},
  image: {type: String},
  userID: {type: String}
});

const Dining = mongoose.model("Dining", diningSchema);

module.exports = Dining;