import React, { Component } from "react"
// import travelAPI from "../utils/travelAPI"
import diningAPI from "../utils/diningAPI"
// import activityAPI from "../utils/activityAPI"
import { Row, Column, Container } from "../components/Grid"
// import SearchFlightResult from "../components/SearchFlightResults";

class Itinerary extends Component {

    state = {
        // savedActivity: [],
        // savedFlight: [],
        savedDining: {},
    }



    componentDidMount() {
        // this.loadFlight();
        this.loadDining();
        // this.loadActivity();
    }

    // loadFlight() {
    //     travelAPI.getFlight(id)
    //         .then(res => this.setState({ savedFlight: res.data }))
    //         .catch(err => console.log(err))
    // }

    loadDining() {
        diningAPI.getDining(this.props.match.params.id)
            .then(res => this.setState({ savedDining: res.data }))
            .catch(err => console.log(err))

    }

    // loadActivity() {
    //     activityAPI.getActivity(id)
    //         .then(res => this.setState({ savedActivity: res.data }))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <Container fluid>
                <Container>
                    {/* <SearchFlightResult savedFlight={this.state.savedFlight} /> */}
                    <Card className="place-card"
                        header={< CardTitle reveal image={this.state.savedDining.image} waves='light' />}
                        title={this.state.savedDining.name}
                        reveal={<>
                            <p>Name: {this.state.savedDining.name}</p>
                            <p>Location: {this.state.savedDining.location}</p>
                            <p>Rating: {this.state.savedDining.rating}</p>
                        </>}>
                        <p><a href={this.state.savedDining.link}>{this.state.savedDining.name}</a></p>
                        <br></br>
                    </Card >
                </Container>
            </Container>
        )
    }
}

export default Itinerary;