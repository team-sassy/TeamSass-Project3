import React, { Component } from "react"
import { Container} from "react-materialize"
import diningAPI from "../utils/diningAPI"
import placeAPI from "../utils/placeAPI"
import travelAPI from "../utils/travelAPI"
import activityAPI from "../utils/activityAPI"
import SavedFlight from "../components/SavedFlight"
import SavedDining from "../components/SavedDining"
import SavedPlace from "../components/SavedPlace"
import SubmittedActivity from "../components/SubmittedActivity"
import Footer from "../components/Footer"

class Itinerary extends Component {
    state = {
        savedFlight: [],
        savedPlace: [],
        savedDining: [],
        submittedActivity: []
    }


    componentDidMount() {
        this.loadFlight()
        this.loadPlace()
        this.loadDining()
        this.loadActivity()
    }

    loadPlace = () => {
        placeAPI.getPlacebyUser()
            .then(res => this.setState({ savedPlace: res.data }))
            .catch(err => console.log(err))
    }

    loadDining = () => {
        diningAPI.getDiningbyUser()
            .then(res => this.setState({ savedDining: res.data }))
            .catch(err => console.log(err))
    }
    deleteDining = () => {
        diningAPI.deleteDining()
            .then(res => this.loadDining())
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
                    <h4><b>Your Saved Itinerary</b></h4>
                </Container>
                
                <Container>
                    <SavedFlight savedFlights={this.state.savedFlight} />
                </Container>

                <Container>
                    <SavedPlace savedDinings={this.state.savedPlace}  deleteDining = {this.deleteDining}/>
                </Container>

                <Container>
                    <SavedDining savedDinings={this.state.savedDining}  deleteDining = {this.deleteDining}/>
                </Container>

                <Container>
                    <SubmittedActivity submittedActivities={this.state.submittedActivity} />
                </Container>
                <Footer />
            </>
        )
    }
}

export default Itinerary;