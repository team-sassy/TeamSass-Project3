import axios from "axios"

export default {
    // Saves an activity to the database
    saveActivity: function (savedActivity) {
        return axios.post("/api/activities", savedActivity);
    },

    // Get a specific activity by id

    getActivity: function (id) {
        return axios.get("/api/activities/" + id);
    },
}


