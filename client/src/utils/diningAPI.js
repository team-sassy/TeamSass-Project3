import axios from "axios";

export default {

    // Get all places
    getDinings: function (diningData) {
        console.log("it takes the information")
        return axios.get("/api/searchdining", { params: diningData })
    },
    // Get a specific dining by id

    getDining: function (id) {
        return axios.get("/api/dining/" + id);
    },

    getDiningbyUser: function() {
        return axios.get("api/dining")
    },

    // Saves an dining to the database
    saveDining: function (savedDining) {
        return axios.post("/api/dining", savedDining);
    },

     // Deletes the dining with the given id
     deleteDining: function (id) {
        return axios.delete("/api/dining/" + id);
    }

}