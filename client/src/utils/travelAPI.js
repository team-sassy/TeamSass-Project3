import axios from "axios"

export default {
   
    // Gets all searchFlights from axios server call
    getFlights: function (flightData) {
        console.log("message: not sure what is going on")
        return axios.get("/api/searchflight", { params: flightData })
    },

    // Gets the book with the given id
    getFlight: function (id) {
        return axios.get("/api/flight/" + id);
    },

    getFlightbyUser: function() {
        return axios.get("api/myflights/")
    },

    // Saves a book to the database
    saveFlight: function (savedFlights) {
        return axios.post("/api/flight", savedFlights);
    },

    // Deletes the book with the given id
    deleteFlight: function (id) {
        return axios.delete("/api/flight/" + id);
    }

}