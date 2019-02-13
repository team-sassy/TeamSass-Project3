const router = require("express").Router();
const travelRoutes = require("./flights");
const activitiesRoutes = require ("./activities")



//these route will match /api/activity
router.use("/activity", activitiesRoutes)


module.exports = router;