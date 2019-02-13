const path = require("path");
const router = require("express").Router();
const searchFlightRoutes = require ('./api/searchFlightRoutes')
const flightsRoutes = require ("./api/flightRoutes")
const activityRoutes = require ("./api/activityRoutes")

// API routes
router.use("/api", searchFlightRoutes);
router.use("/api", flightsRoutes );
router.use ("/api", activityRoutes )

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;