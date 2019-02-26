const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");

// Matches with "/api/flight"
router.route("/flight")
  .get(travelsController.findAll)
  .post(travelsController.create);

// Matches with "/api/flight/:id"
router.route("/flight/:id")
  .get(travelsController.findById)
  .put(travelsController.update)
  .delete(travelsController.remove);

router.route("/myflights")
  .get(travelsController.findByUser)

module.exports = router;