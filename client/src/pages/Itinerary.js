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
    deletePlaceButton = (id) => {
        placeAPI.deletePlace(id)
            .then(res => this.loadPlace())
            .catch(err => console.log(err))
    }

    loadDining = () => {
        diningAPI.getDiningbyUser()
            .then(res => this.setState({ savedDining: res.data }))
            .catch(err => console.log(err))
    }
    deleteDiningButton = (id) => {
        diningAPI.deleteDining(id)
            .then(res => this.loadDining())
            .catch(err => console.log(err))
    }

    loadFlight = () => {
        travelAPI.getFlightbyUser()
            .then(res => this.setState({ savedFlight: res.data }))
            .catch(err => console.log(err))
    }
    deleteFlightButton = (id) => {
        travelAPI.deleteFlight(id)
            .then(res => this.loadFlight())
            .catch(err => console.log(err))
    }

    loadActivity = () => {
        activityAPI.getActivityByUser()
            .then(res => this.setState({ submittedActivity: res.data }))
            .catch(err => console.log(err))
    }
    deleteActivityButton = (id) => {
        activityAPI.deleteActivity(id)
            .then(res => this.loadActivity())
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Container>
                    <h4><b>Your Saved Itinerary</b></h4>
                </Container>
                
                <Container>
                    <SavedFlight savedFlights={this.state.savedFlight} deleteFlightButton = {this.deleteFlightButton} />
                </Container>

                <Container>
                    <SavedPlace savedDinings={this.state.savedPlace} deletePlaceButton = {this.deletePlaceButton}/>
                </Container>

                <Container>
                    <SavedDining savedDinings={this.state.savedDining}  deleteDiningButton = {this.deleteDiningButton}/>
                </Container>

                <Container>
                    <SubmittedActivity submittedActivities={this.state.submittedActivity} deleteActivityButton = {this.deleteActivityButton} />
                </Container>
                <Footer />
            </>
        )
    }
}

export default Itinerary;