const axios = require("axios");
const router = require("express").Router();

// match routes /api/searchdining

router.get("/searchdining", (req, res) => {
   
    const {
        term,
        location,
    } = req.query;
    
    const URL = "https://api.yelp.com/v3/businesses/search" + term + location ;
    axios.get(URL, {
        timeout: 10000
    })
        .then(results => results.data)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
})

module.exports = router