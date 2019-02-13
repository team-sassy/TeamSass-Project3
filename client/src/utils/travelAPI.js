import axios from "axios"

export default {

    // Gets all searchFlights from axios server call
    getFlights: function (departure, arrival, year, month, date) {
        console.log("message: not sure what is going on")
        return axios.get("/api/searchflight", {params: {
            departure: departure,
            arrival: arrival,
            year: year,
            month: month,
            date: date
        }});
    },

    // Gets the book with the given id
    getFlight: function (id) {
        return axios.get("/api1/flight/" + id);
    },

    // Saves a book to the database
    saveFlight: function (savedFlights) {
        return axios.post("/api1/flight", savedFlights);
    },

    // Deletes the book with the given id
    deleteFlight: function (id) {
        return axios.delete("/api1/flight/" + id);
    }

}