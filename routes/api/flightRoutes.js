const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");

// Matches with "/api/flight"
router.route("/")
  .get(travelsController.findAll)
  .post(travelsController.create);

// Matches with "/api/flight/:id"
router.route("/:id")
  .get(travelsController.findById)
  .put(travelsController.update)
  .delete(travelsController.remove);

module.exports = router;