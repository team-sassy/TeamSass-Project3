const axios = require("axios");
const router = require("express").Router();

// match routes /api/searchflight

router.get("/searchflight", (req, res) => {
    const {
        departure,
        arrival,
        year,
        month,
        date
    } = req.query;
    let appId = "2cb6fe53";
    let appKey = "72a1bb3ac32ca88e0609955f2f4ade67"
    const URL = "https://api.flightstats.com/flex/schedules/rest/v1/json/from/" + departure + "/to/" + arrival +
        "/departing/" + year + "/" + month + "/" + date + "?appId=" + appId + "&appKey=" + appKey;
    console.log(URL)
    axios.get(URL, {
        timeout: 10000
    })
        .then(results => results.data)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
})

module.exports = router