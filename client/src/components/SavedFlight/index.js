import React from "react";
import "./style.css";
import { Collection, CollectionItem, Col, Button, Row, Icon } from "react-materialize"
import Moment from 'react-moment'

const SavedFlight = props => {
    return (props.savedFlights.length === 0) ? (
        <></>
    ) : (
            <Row>
                {props.savedFlights.map(savedflight => {
                    return (
                        <Col l={6} m={6} s={6}>
                            <Icon>flight</Icon>
                            <Collection className="light-blue lighten-2 flightItem" key={savedflight.id}>
                                <CollectionItem className="light-blue lighten-2" >
                                    <Col l={6} m={6} s={6}>
                                        <h6><b>Date: <Moment format="MM-DD-YYYY">{savedflight.departure_time}</Moment></b></h6>
                                        <p><Moment format="LT">{savedflight.departure_time}</Moment> - <Moment format="LT">{savedflight.arrival_time}</Moment></p>
                                        <p><i>{savedflight.carrier} {savedflight.flightnumber}</i></p>
                                        <Button id={savedflight.id}
                                            className="deleteFlight">Delete</Button>
                                    </Col>
                                    <Col l={6} m={6} s={6}>
                                        <h6><b>Duration: <Moment duration={savedflight.departure_time} date={savedflight.arrival_time} /></b></h6>
                                        <p>Number of Stop: {savedflight.stops}</p>
                                        <p><i>{savedflight.departure} - {savedflight.arrival}</i></p>
                                    </Col>
                                </CollectionItem>
                            </Collection>
                        </Col>
                    )
                })}
            </Row>
        )

}
export default SavedFlight