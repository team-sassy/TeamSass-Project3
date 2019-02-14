import axios from "axios"

export default {
    // Saves an activity to the database
    saveActivity: function (activityData) {
        return axios.post("/api/activity", activityData);
    },

    // Get a specific activity by id

    getActivity: function () {
        return axios.get("/api/activity/");
    },
}


