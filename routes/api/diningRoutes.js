const router = require("express").Router();
const diningController = require("../../controllers/diningController");

// Matches with "/api/dining"
router.route("/")
  .get(diningController.findAll)
  .post(diningController.create);

router.route("/:id")
  .get(diningController.findById)
  .put(diningController.update)
  .delete(diningController.remove);

module.exports = router;