const router = require("express").Router();
const flightRoutes = require("./routes/api/flightRoutes");
const activityRoutes = require ("./routes/api/activityRoutes")
const diningRoutes = require("./routes/api/diningRoutes")

//these routes will match /api/activity
router.use("/activity", activityRoutes)
//these routes will match /api/flight
router.use("/flight", flightRoutes)
//these routes will match /api/dining
router.use("/dining", diningRoutes)


module.exports = router;