import React from "react";
import "./style.css";
import { Col, Row, Card, CardTitle, Button } from 'react-materialize'

const SearchFlightResult = props => {
    return (props.flights.length === 0) ? (
        <></>
    ) : (
            <>
                {props.flights.map(flight => {
                    return (
                        <Col m={6} s={12}>
                            <Card  className='blue-grey darken-1' 
                            textClassName='white-text' 
                            title="Flight Number" 
                            actions={[<Button className="saveBook btn btn-primary" 
                            id={flight.id} onClick={(event) => props.handleSavedButton(event)}>Save Flight</Button>]}>
                                <h6>{flight.carrier} {flight.flightnumber}</h6>
                                <p>Departure Time: {flight.departure_time}</p>
                                <p>Arrival Time:{flight.arrival_time} </p>
                            </Card>
                        </Col>
                    )
                })}
            </>
        )

}
export default SearchFlightResult