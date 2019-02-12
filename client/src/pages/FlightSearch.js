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
            [name]:value
        })
    }
    

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
       console.log(this.state.departure, this.state.arrival, this.state.year, this.state.month,this.state.date)
        // once it clicks it connects to the google book api with the search value
        API.getFlights()
            .then(res => this.setState({flights: res.data}))
            .catch(err => console.log(err))
    
                // console.log (res)
                // if (res.data.scheduledFlights === "error") {
                //     throw new Error(res.data.scheduledFlights);
                // }
                // else {
                //     // store response in a array
                //     let results = res.data.scheduledFlights
                //     console.log(results)
                //     //map through the array 
                //     results = results.map(result => {
                //         //store each book information in a new object 
                //         result = {
                //             carrier: result.carrierFsCode,
                //             flightNumber: result.flightNumber,
                //             departure_time: result.departureTime,
                //             arrival_time: result.arrivalTime
                //         }
                //         return result;
                //     })
                //     // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                //     this.setState({
                //         flights: results,
                //         departure: "",
                //         arrival: "",
                //         year: "",
                //         month: "",
                //         date: "",
                //     })
            //     // }
            // })
            // .catch(err => this.setState({ error: err.scheduledFlights }));
    }

    // handleSavedButton = event => {
    //     // console.log(event)
    //     event.preventDefault();
    //     console.log(this.state.books)
    //     let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    //     savedBooks = savedBooks[0];
    //     API.saveBook(savedBooks)
    //         .then(this.setState({ message: alert("Your book is saved") }))
    //         .catch(err => console.log(err))
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
                            /> */}
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