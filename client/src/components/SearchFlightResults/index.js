import React from "react";
import "./style.css";
import { Col, Row, Collection, CollectionItem, Button } from 'react-materialize'
import Moment from 'react-moment'


const SearchFlightResult = props => {
    return (props.flights.length === 0) ? (
        <></>
    ) : (
            <>
                {props.flights.map(flight => {
                    return (
                        <Row key={flight.id}>
                            <Col l={2} m={2} s={2} />
                            <Col l={8} m={8} s={8}>
                                <Collection className="light-blue lighten-2 flightItemResult">
                                    <CollectionItem className="light-blue lighten-2">
                                        <Col l={5} m={5} s={5}>
                                            <h6><b>Date: <Moment format="MM-DD-YYYY">{flight.departure_time}</Moment></b></h6>
                                            <p><Moment format="LT">{flight.departure_time}</Moment> - <Moment format="LT">{flight.arrival_time}</Moment></p>
                                            <p><i>{flight.carrier} {flight.flightnumber}</i></p>
                                        </Col>
                                        <Col l={5} m={5} s={5}>
                                            <h6><b>Duration: <Moment duration={flight.departure_time} date = {flight.arrival_time} /></b></h6>
                                            <p>Number of Stop: {flight.stops}</p>
                                            <p><i>{flight.departure} - {flight.arrival}</i></p>
                                        </Col>
                                        <Col l={2} m={2} s={2}>
                                            <Button id={flight.id} onClick={(id) => props.handleSavedButton(id)}
                                                className="saveFlight">Save</Button>
                                        </Col>
                                    </CollectionItem>
                                </Collection>
                            </Col>
                            <Col l={2} m={2} s={2} />
                        </Row>
                    )
                })}
            </>
        )

}
export default SearchFlightResult