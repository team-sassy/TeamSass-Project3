import React from "react";
import "./style.css";
import {CardPanel } from "react-materialize"
import {Container} from "../Grid"

const SavedFlight = props => {
    return (props.savedFlights.length === 0) ? (
        <></>
    ) : (
            <>
                {props.savedFlights.map(savedFlight => {
                    return (
                        <Container>
                            <CardPanel className="teal lighten-4 black-text">
                                <span>
                                    <h6>Flight Number: {savedFlight.carrier} {savedFlight.flightnumber}</h6>
                                    <p>Departure Time: {savedFlight.departure_time}</p>
                                    <p>Arrival Time: {savedFlight.arrival_time} </p>
                                </span>
                            </CardPanel>
                        </Container>
                    )
                })}
            </>
        )

}
export default SavedFlight