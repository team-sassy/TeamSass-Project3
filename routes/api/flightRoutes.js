const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");

// Matches with "/api1/flight"
router.route("/flight")
  .get(travelsController.findAll)
  .post(travelsController.create);

// Matches with "/api1/flight/:id"
router.route("/flight/:id")
  .get(travelsController.findById)
  .put(travelsController.update)
  .delete(travelsController.remove);

module.exports = router;