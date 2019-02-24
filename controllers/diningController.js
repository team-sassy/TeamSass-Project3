const db = require("../models");

// Defining methods for the diningController
module.exports = {
  findAll: function(req, res) {
    db.Dining
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Dining
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    // console.log(req.user)
    req.body.userID = req.user._id
    db.Dining
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByUser: function(req,res){
    db.Dining
    .find({userID: req.user._id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    db.Dining
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function(req, res) {
    db.Dining
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
