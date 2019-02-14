import axios from "axios"

export default {
    // getSearchFlights: function (departure, arrival, year, month, date) {
    //     const appId = "2cb6fe53";
    //     const appKey = "72a1bb3ac32ca88e0609955f2f4ade67"
    //     const URL = "https://api.flightstats.com/flex/schedules/rest/v1/json/from/" + departure + "/to/" + arrival +
    //         "/departing/" + year + "/" + month + "/" + date + "?appId=" + appId + "&appKey=" + appKey
    //     return axios({
    //         method: 'GET',
    //         url: URL,
    //         headers: {'X-Requested-With': 'XMLHttpRequest'}
    //     })
    // },

    // Gets all searchFlights from axios server call
    getFlights: function (flightData) {
        console.log("message: not sure what is going on")
        return axios.get("/api/searchflight", { params: flightData })
    },

    // Gets the book with the given id
    getFlight: function (id) {
        return axios.get("/api/flight/" + id);
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