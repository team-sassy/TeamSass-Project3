import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchFlightResult = props => {
    return (props.flights.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Flight Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.flights.map(flight => {
                            return (
                                <li className="search-list list-group-item" key={flight.key}>
                                    <Row className="SearchResult row" id={flight.id+ "Card"}>
                                        {/* col-9 show information of the book */}
                                        <Col size="12" className="bookInfo">
                                            <Row>
                                                <h3 className="flightCarrier">{flight.carrier}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="flightNumber">{flight.flightnumber}</h4>
                                            </Row>
                                            <Row>
                                                <p className="departureTime">{flight.departure_time}</p>
                                            </Row>
                                            <Row>
                                                <p className="arrivalTime">{flight.arrival_time}</p>
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
        )
}
export default SearchFlightResult