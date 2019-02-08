const router = require("express").Router();
const travelRoutes = require("./travels");

// Book routes
router.use("/travels", travelRoutes);

module.exports = router;