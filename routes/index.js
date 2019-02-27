const path = require("path");
const router = require("express").Router();
const flightRoutes = require ("./api/flightRoutes")
const searchFlightRoutes = require ("./api/searchFlightRoutes")
const diningRoutes = require("./api/diningRoutes")
const placeRoutes = require("./api/placeRoutes")
const activityRoutes = require("./api/activityRoutes")
const searchDiningRoutes = require("./api/searchDiningRoutes")
const searchPlaceRoutes = require("./api/searchPlaceRoutes")
const passportRoutes = require("./api/passportRoutes")
// API route
router.use("/api", flightRoutes )
router.use("/api", searchFlightRoutes)
router.use('/api', diningRoutes)
router.use('/api', placeRoutes)
router.use("/api", searchPlaceRoutes)
router.use("/api", activityRoutes)
router.use("/api", searchDiningRoutes)
router.use("/user", passportRoutes)

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;