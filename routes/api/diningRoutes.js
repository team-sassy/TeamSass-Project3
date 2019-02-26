const router = require("express").Router();
const diningController = require("../../controllers/diningController");

// Matches with "/api/dining"
router.route("/dining")
  .get(diningController.findAll)
  .post(diningController.create);

router.route("/dining/:id")
  .get(diningController.findById)
  .put(diningController.update)
  .delete(diningController.remove);

router.route("/mydinings")
  .get(diningController.findByUser)

module.exports = router;