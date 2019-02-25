import React from "react";
import "./style.css";
import { CardPanel } from 'react-materialize'
import {Container} from "../Grid"

const SavedDining = props => {
    console.log(props.savedDinings)
    return (props.savedDinings.length === 0) ? (
        <></>
    ) : (
            <>
                {props.savedDinings.map(savedDining => {
                    return (
                        <Container>
                            <CardPanel className="teal lighten-4 black-text">
                                <span>
                                    <h6>Name: {savedDining.name}</h6>
                                    <p>Location: {savedDining.location}</p>
                                    <p>Rating: {savedDining.rating}</p>
                                    <p>Link: <a href={savedDining.link}>{savedDining.name}</a></p>
                                </span>
                            </CardPanel>
                        </Container>
                    )
                })}
            </>
        )
}
export default SavedDining