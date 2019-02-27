import axios from "axios";

export default {

    // Get all places
    getPlaces: function (diningData) {
        console.log("it takes the information")
        return axios.get("/api/searchplace", { params: diningData })
    },
    // Get a specific dining by id

    getPlace: function (id) {
        return axios.get("/api/place/" + id);
    },

    getPlacebyUser: function() {
        return axios.get("api/myplaces/")
    },

    // Saves an dining to the database
    savePlace: function (savedDining) {
        return axios.post("/api/place", savedDining);
    },

     // Deletes the dining with the given id
     deletePlace: function (id) {
        return axios.delete("/api/place/" + id);
    }

}