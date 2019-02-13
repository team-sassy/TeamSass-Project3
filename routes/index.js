const path = require("path");
const router = require("express").Router();
const searchFlightRoutes = require ('./api/apiRoutes')
const flightsRoutes = require ("./api/flights")
const activityRoutes = require ("./api/activities")

// API routes
router.use("/api", searchFlightRoutes);
router.use("/api1", flightsRoutes );
router.use ("/api2", activityRoutes )

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;