import axios from "axios";

// require("dotenv").config();

export default {
    // Get dining from yelp search 
    getYelp: function (term, location) {
        // let appId = process.env.appId;
        // let appKey = process.env.appKey;
        const URL = "https://api.yelp.com/v3/businesses/search" + term + location;
        console.log(URL)
        return axios.get(URL)
    },

        // Saves an activity to the database
        saveDining: function (savedDining) {
            return axios.post("/api/dining", savedDining);
        },
    
        // Get a specific activity by id
    
        getDining: function (id) {
            return axios.get("/api/dining/" + id);
        },
    }