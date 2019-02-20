import React from "react";
import "./style.css";
import {Row, Col, Container} from "../Grid"

const SearchFlightResult = props => {
    return (props.flights.length === 0) ? (
        <></>
    ) : (
        <Container>
            <div className="card-container">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.flights.map(flight => {
                            return (
                                <li className="search-list list-group-item" key={flight.key}>
                                    <Row className="SearchResult row" id={flight.id+ "Card"}>
                                        <Col size="12" className="bookInfo">
                                            <Row>
                                                <h4 className="flightNumber">Flight Number:{flight.carrier} {flight.flightnumber }</h4>
                                            </Row>
                                            <Row>
                                                <p className="departureTime">Departure time: {flight.departure_time}</p>
                                            </Row>
                                            <Row>
                                                <p className="arrivalTime">Arrival time{flight.arrival_time}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveBook btn btn-primary" id={flight.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Flight
                                        </button>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Container>
        )
}
export default SearchFlightResult