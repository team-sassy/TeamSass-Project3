import React, { Component } from "react";
import API from "../utils/travelAPI";
import { Container} from "react-materialize"
import SearchFlightForm from "../components/SearchFlightForm";
import SearchFlightResult from "../components/SearchFlightResults";
import swal from 'sweetalert'


class FlightSearch extends Component {
    //create state
    state = {
        departure: "",
        arrival: "",
        year: "",
        month: "",
        date: "",
        message: {},
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
            .then(res => {
                if (res.data.scheduledFlights === "error") {
                    this.setState({
                        message: swal({
                            title: "Please fill in all fields",
                            icon: "warning",
                            button: "Close"
                        })
                    });
                    throw new Error(res.data.scheduledFlights)
                }
                else {
                    // console.log("message: Maybe it works")
                    let results = res.data.scheduledFlights
                    results = results.map(result => {
                        result = {
                            id: result.referenceCode,
                            key: result.referenceCode,
                            departure: result.departureAirportFsCode,
                            arrival: result.arrivalAirportFsCode,
                            stops: result.stops,
                            carrier: result.carrierFsCode,
                            flightnumber: result.flightNumber,
                            departure_time: result.departureTime,
                            arrival_time: result.arrivalTime
                        }
                        return result;
                    })
                    this.setState({ flights: results })
                }
            })
            .catch(err => console.log(err))
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.flights)
        let savedFlights = this.state.flights.filter(flight => flight.id === event.target.id)
        savedFlights = savedFlights[0];
        API.saveFlight(savedFlights)
            .then(this.setState({
                message: swal({
                    title: "This flight is saved to your itinerary",
                    icon: "success",
                    button: "Close"
                })
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <SearchFlightForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Container>
                <SearchFlightResult flights={this.state.flights}
                    handleSavedButton={this.handleSavedButton}
                />
                </Container>
            </>
        )
    }


}

export default FlightSearch