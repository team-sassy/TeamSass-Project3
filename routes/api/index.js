const router = require("express").Router();
const flightRoutes = require("./flightRoutes");
const activityRoutes = require ("./activityRoutes")
const diningRoutes = require("./diningRoutes")
const searchFlightRoute = require("./searchFlightRoutes")

//these routes will match /api/activity
router.use("/activity", activityRoutes)
//these routes will match /api/flight
router.use("/flight", flightRoutes)
//these routes will match /api/dining
router.use("/dining", diningRoutes)
//these routes will match /api/searchflight
router.use("/searchflight", searchFlightRoute)
module.exports = router;