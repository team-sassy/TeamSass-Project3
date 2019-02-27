import React from "react";
import "./style.css";
import { Col, Row, Collection, CollectionItem, Button, Container } from 'react-materialize'
import Moment from 'react-moment'


const SearchFlightResult = props => {
    return (props.flights.length === 0) ? (
        <></>
    ) : (
            <>
                <Container>
                    <Row>
                        {props.flights.map(flight => {
                            return (
                                <Col l={6} m={6} s={6}>
                                    <Collection className="light-blue lighten-2 flightItemResult">
                                        <CollectionItem className="light-blue lighten-2">
                                            <Col l={6} m={6} s={6}>
                                                <h6><b>Date: <Moment format="MM-DD-YYYY">{flight.departure_time}</Moment></b></h6>
                                                <p><Moment format="LT">{flight.departure_time}</Moment> - <Moment format="LT">{flight.arrival_time}</Moment></p>
                                                <p><i>{flight.carrier} {flight.flightnumber}</i></p>
                                                <Button id={flight.id} onClick={(id) => props.handleSavedButton(id)}
                                                    className="saveFlight">Save</Button>
                                                <br></br>
                                            </Col>
                                            <Col l={6} m={6} s={6}>
                                                <h6><b>Duration: <Moment duration={flight.departure_time} date={flight.arrival_time} /></b></h6>
                                                <p>Number of Stop: {flight.stops}</p>
                                                <p><i>{flight.departure} - {flight.arrival}</i></p>
                                            </Col>
                                        </CollectionItem>
                                    </Collection>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )

}
export default SearchFlightResult