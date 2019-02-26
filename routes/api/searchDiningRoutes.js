const axios = require("axios");
const router = require("express").Router();

// match routes /api/searchdining

router.get("/searchdining", (req, res) => {
    const {
        term,
        location,
    } = req.query;
    
    const AuthStr = 'Bearer '.concat("kaEuLEuoM9btZBxPihNV_dFtSF1ueSXwuP8T76UHvO0pMpRFMRzwl087Nxb9RLFgr0uoM-wptFNSfxYnMbaSv6rztHxqacbjEWFFmHCug9QWA4sjoHjnPuMVNfxYXHYx")
    console.log (AuthStr)
    const URL = "https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location ;
    console.log (URL)
    axios.get(URL, {
        headers: {
            Authorization: AuthStr,
        },
        timeout: 10000
    })
        .then(results => results.data)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
})

module.exports = router