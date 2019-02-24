import React, { Component } from "react"
import { Container } from "../components/Grid"
import diningAPI from "../utils/diningAPI"
import travelAPI from "../utils/travelAPI"
import activityAPI from "../utils/activityAPI"
import SavedFlight from "../components/SavedFlight"
import SavedDining from "../components/SavedDining"
import SubmittedActivity from "../components/SubmittedActivity"

class Itinerary extends Component {
    state = {
        savedFlight: [],
        savedDining: [],
        submittedActivity: []
    }


    componentDidMount() {
        this.loadFlight()
        this.loadDining()
        this.loadActivity()
    }


    loadDining = () => {
        diningAPI.getDiningbyUser()
            .then(res => this.setState({ savedDining: res.data }))
            .catch(err => console.log(err))
    }

    loadFlight = () => {
        travelAPI.getFlightbyUser()
            .then(res => this.setState({ savedFlight: res.data }))
            .catch(err => console.log(err))
    }

    loadActivity = () => {
        activityAPI.getActivityByUser()
            .then(res => this.setState({ submittedActivity: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container>
                    <div>Your Saved Flights</div>
                    <SavedFlight savedFlights={this.state.savedFlight} />
                </Container>
                <Container>
                    <div>Your Saved Restaurants</div>
                    <SavedDining savedDinings={this.state.savedDining} />
                </Container>
                <Container>
                    <div>Your Activities</div>
                    <SubmittedActivity submittedActivities={this.state.submittedActivity} />
                </Container>


            </>
        )
    }
}

export default Itinerary;