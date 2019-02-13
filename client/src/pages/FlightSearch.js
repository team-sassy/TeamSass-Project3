import React, { Component } from "react";
import API from "../utils/travelAPI";
// import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchFlightForm from "../components/SearchFlightForm";
import SearchFlightResult from "../components/SearchFlightResults";


class FlightSearch extends Component {
    //create state
    state = {
        departure: "",
        arrival: "",
        year: "",
        month: "",
        date: "",
        flights: []
    };


    
    //function to take value of what enter in the search bar
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name
        // console.log (value,name)
        this.setState({
            [name]: value
        })
    }


    // function to control the submit button of search from sever site after making call from server to 3rd party API
    handleFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.departure, this.state.arrival, this.state.year, this.state.month, this.state.date)
        API.getFlights({
            departure: this.state.departure,
            arrival: this.state.arrival,
            year: this.state.year,
            month: this.state.month,
            date: this.state.date
        })
            .then(res => this.setState({ flightData: res.data }))
            .then(console.log("message: Maybe it works"))
            .catch(err => console.log(err))
    }

    //function to control the submit button of the search form and pull data from 3rd party API from client site
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     // once it clicks it connects to the google book api with the search value
    //     API.getSearchFlights(this.state.departure, this.state.arrival, this.state.year, this.state.month, this.state.date)
    //         .then(res => {
    //             console.log("did it get call?", res.data)
    //             if (res.data === "error") {
    //                 throw new Error(res.data.items);
    //             }
    //             else {
    //                 // store response in a array
    //                 let results = res.data.scheduledFlights
    //                 //map through the array 
    //                 results = results.map(result => {
    //                     //store each book information in a new object 
    //                     result = {

    //                     }
    //                     return result;
    //                 })
    //                 // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
    //                 this.setState({ flights: results, error: "" })
    //             }
    //         })
    //         .catch(err => this.setState({ error: err.items }));
    // }

    render() {
        return (
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchFlightForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            /> 
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <SearchFlightResult flights={this.state.flights} />
                </Container>
                <br></br>
            </Container>
        )
    }


}

export default FlightSearch