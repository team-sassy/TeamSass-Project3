const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  id: {type:String, required:true},
  name: {type: String, required: true},
  location: {type: String, required: true},
  phone: {type:String, required:true},
  rating:{type: Number, required:true},
  link: { type: String, required: true},
  image: {type: String},
  userID: {type: String, required: true}
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;