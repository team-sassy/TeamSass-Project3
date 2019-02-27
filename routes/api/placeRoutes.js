const router = require("express").Router();
const placeController = require("../../controllers/placeController");

// Matches with "/api/dining"
router.route("/place")
  .get(placeController.findAll)
  .post(placeController.create);

router.route("/place/:id")
  .get(placeController.findById)
  .put(placeController.update)
  .delete(placeController.remove);

router.route("/myplaces")
  .get(placeController.findByUser)

module.exports = router;